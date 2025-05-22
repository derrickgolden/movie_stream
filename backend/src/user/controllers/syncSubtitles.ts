import * as fs from 'fs';
import path from 'path';
import express, { Request, Response } from 'express';
import { universalResponse } from 'user/types/universalResponse';
import getSafeFilePath from './getSafeFilePath';

const SERIES_PATH = process.env.SERIES_PATH;
const VIDEO_PATH = process.env.VIDEO_PATH;

const router = express.Router();

/**
 * Shift timestamps in a WebVTT (.vtt) subtitle file by a given number of seconds.
 *
 * @param filePath - The path to the .vtt file to modify.
 * @param shiftSeconds - The number of seconds to shift subtitles (can be negative).
 */
function shiftVTT(filePath: string, shiftSeconds: number): void {
  const tempPath = `${filePath}.tmp`;
  const data: string = fs.readFileSync(filePath, 'utf8');

  const shiftedData: string = data.replace(
    /(\d{2}):(\d{2}):(\d{2})\.(\d{3})/g,
    (_match: string, hh: string, mm: string, ss: string, ms: string): string => {
      let time =
        parseInt(hh) * 3600 +
        parseInt(mm) * 60 +
        parseInt(ss) +
        parseInt(ms) / 1000;

      time += shiftSeconds;
      if (time < 0) time = 0;

      const newH = String(Math.floor(time / 3600)).padStart(2, '0');
      const newM = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
      const newS = String(Math.floor(time % 60)).padStart(2, '0');
      const newMs = String(Math.floor((time * 1000) % 1000)).padStart(3, '0');

      return `${newH}:${newM}:${newS}.${newMs}`;
    }
  );

  fs.writeFileSync(tempPath, shiftedData, 'utf8');
  fs.renameSync(tempPath, filePath); // Overwrite original file safely
}

router.post('/sync', async (req: Request, res: Response<universalResponse>) => {
  const { synSubtitles, subtitlesUrl, movieUrl, is_series } = req.body;
  if (!SERIES_PATH) {
    return res.status(500).json({ success: false, msg: 'SERIES_PATH not defined' });
  }

  if (!subtitlesUrl || !synSubtitles) {
    return res.status(400).json({ success: false, msg: 'Missing required fields' });
  }

  try {
    // const baseUrl = 'http://localhost:4000/series/';
    // const baseUrl = is_series? 'http://192.168.0.107:2080/series/' : 'http://192.168.0.107:2080/video/';
    const baseUrl = is_series? 'https://japtech.africa/series/' : 'https://japtech.africa/video/';
    const cleanPath = subtitlesUrl.split('?')[0];
    const relativeUrl = cleanPath.replace(baseUrl, '');

    const filePath = is_series? getSafeFilePath(SERIES_PATH, relativeUrl): getSafeFilePath(VIDEO_PATH, relativeUrl);
    
    shiftVTT(filePath, Number(synSubtitles));
    return res.status(200).json({ success: true, 
      msg: 'Subtitles shifted successfully', 
      details: [{subtitlesUrl: cleanPath, movieUrl}] 
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ success: false, msg: 'Server side error', err: error.message });
  }
});

export default router;
