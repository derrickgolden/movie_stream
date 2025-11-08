import express, { Request, Response } from 'express';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import path from 'path';
import fs from 'fs';

require('dotenv').config();

import adminauth from './user/routes/auth';
import videos from './user/routes/movies/getMoviesList';
import alterVideos from './user/routes/movies/uploadMovie';
import deleteVideos from './user/routes/movies/deleteMovies';
import requestMovie from './user/routes/requestMovie';
import feedback from './user/routes/feedback';
import watchProgress from './user/routes/watchProgress'
import seriesPosters from "./user/routes/getPosters"
import clients from "./user/routes/customers";
import settings from "./user/routes/settings";
import landingPageData from "./user/routes/landingPageData";
import statistics from "./user/routes/statistics";
import categories from "./user/routes/categories";
import { authenticateToken } from './user/middlewares/authenticateToken';
import shiftVTT from './user/controllers/syncSubtitles';
import { validateIP } from './user/middlewares/validateIP';
import getSafeFilePath from './user/controllers/getSafeFilePath';

const SERIES_PATH=process.env.SERIES_PATH;
const VIDEO_PATH=process.env.VIDEO_PATH;
const PORT = Number(process.env.BACKEND_PORT);

const loadMime = async () => {
  const { default: mime } = await import('mime'); // Dynamic ESM import
  return mime;
};

const app = express();
// Enable CORS with specific origin
app.use(cors());
// Handle preflight requests for all routes
app.options('*', cors());

// Example route: Serve video files
app.get('/video/:filename(*)', (req, res) => {
  const { filename } = req.params;
  const videoPath = getSafeFilePath(VIDEO_PATH, filename);
  if (!videoPath) {
    return res.status(400).send('Invalid file path');
  }
  videoStat(videoPath, req, res);
});

app.get('/series/:filename(*)', (req, res) => {
  const { filename } = req.params;
  console.log({filename})
  const videoPath = getSafeFilePath(SERIES_PATH, filename);
  if (!videoPath) {
    return res.status(400).send('Invalid file path');
  }
  videoStat(videoPath, req, res);
});

const videoStat = async (videoPath: string, req:Request, res:Response) => {
  try {
    const mime = await loadMime();
    const stats = await fs.promises.stat(videoPath);
    const { range } = req.headers;
    const videoSize = stats.size;

    // Automatically determine MIME type
    const mimeType = mime.getType(videoPath) || 'application/octet-stream';

    if (range) {
      const [startStr, endStr] = range.replace(/bytes=/, '').split('-');
      const start = parseInt(startStr, 10);
      const end = endStr ? parseInt(endStr, 10) : videoSize - 1;
      const chunkSize = end - start + 1;
      const videoStream = fs.createReadStream(videoPath, { start, end });
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${videoSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': mimeType, // Automatically handled
      });
      videoStream.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': videoSize,
        'Content-Type': mimeType, // Automatically handled
      });
      fs.createReadStream(videoPath).pipe(res);
    }
  } catch (err) {
    console.error(`Error accessing file at ${videoPath}:`, err.message);
    res.status(404).send('Video not found');
  }
};

// app.get('/admin/episode', (req, res) => {
//   const { baseurl, num } = req.query as { baseurl?: string; num?: string };
//   if (!baseurl || !num) {
//     return res.status(400).json({ success: false, error: 'Missing baseurl or num' });
//   }

//   try {
//     const urlParts = new URL(baseurl);
//     const pathnameParts = urlParts.pathname.split('/').filter(Boolean);
//     const seriesIndex = pathnameParts.findIndex(p => p.toLowerCase() === 'series');
//     if (seriesIndex === -1 || !pathnameParts[seriesIndex + 1] || !pathnameParts[seriesIndex + 2]) {
//       return res.status(400).json({ success: false, error: 'Invalid series URL format' });
//     }

//     const seriesName = decodeURIComponent(pathnameParts[seriesIndex + 1]);
//     const season = pathnameParts[seriesIndex + 2];

//     const episodeTag = `S${season.substring(1).padStart(2, '0')}E${parseInt(num).toString().padStart(2, '0')}`;
//     const basePath = path.join(SERIES_PATH, seriesName, season);

//     const files = fs.readdirSync(basePath);

//     // Find the video file
//     const videoFile = files.find(f => f.includes(episodeTag) && /\.(mp4|mkv|avi)$/i.test(f)) || "";

//     // Find the subtitle file (prefer .vtt, fallback to .srt)
//     const subtitleFile = files.find(f => f.includes(episodeTag) && /\.(vtt|srt)$/i.test(f)) || "";

//     res.json({
//       success: true, msg: "", details:[{
//       episode: num,
//       videoFile,
//       subtitleFile, }]// will be null if none found
//     });
//   } catch (err) {
//     res.status(500).json({ success: false, error: (err as Error).message });
//   }
// });


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(cookieParser());

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/user', adminauth);
app.use('/posters', seriesPosters);
app.use('/user', authenticateToken, [watchProgress, requestMovie]);
app.use('/user/landing_page_data', authenticateToken,  landingPageData);
app.use('/user/settings', authenticateToken,  settings);
app.use('/user/categories', authenticateToken,  categories);
app.use('/user/feedback', authenticateToken,  feedback);
app.use('/admin/feedback', authenticateToken,  feedback);
app.use('/videos', authenticateToken, [videos, alterVideos, deleteVideos]);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/admin/videos', authenticateToken,  requestMovie);
app.use('/admin/clients', authenticateToken,  clients);
app.use('/admin/statistics', authenticateToken,  statistics);
app.use('/admin/subtitles',  shiftVTT);

app.listen(PORT, () => {
  console.log(`Listening on port :${PORT}`);
});