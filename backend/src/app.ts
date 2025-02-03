import express, { Request, Response } from 'express';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

require('dotenv').config();

import adminauth from './user/routes/auth';
import videos from './user/routes/movies/getMoviesList';
import alterVideos from './user/routes/movies/uploadMovie';
import deleteVideos from './user/routes/movies/deleteMovies';
import requestMovie from './user/routes/requestMovie';
import { authenticateToken } from './user/middlewares/authenticateToken';
import { validateIP } from './user/middlewares/validateIP';

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
console.log(SERIES_PATH)
console.log(VIDEO_PATH)
  const videoPath = getSafeFilePath(VIDEO_PATH, filename);
  if (!videoPath) {
    return res.status(400).send('Invalid file path');
  }
  videoStat(videoPath, req, res);
});

app.get('/series/:filename(*)', (req, res) => {
  const { filename } = req.params;
  const videoPath = getSafeFilePath(SERIES_PATH, filename);
  if (!videoPath) {
    return res.status(400).send('Invalid file path');
  }
  videoStat(videoPath, req, res);
});

const getSafeFilePath = (rootPath: string, userPath: string) => {
  const sanitizedPath = path.normalize(userPath).replace(/^(\.\.(\/|\\|$))+/, ''); // Prevent traversal
  const resolvedPath = path.join(rootPath, sanitizedPath);

  // Ensure the resolved path is within the root directory
  if (!resolvedPath.startsWith(path.resolve(rootPath))) {
    console.warn(`Blocked attempt to access: ${resolvedPath}`);
    return null;
  }
  return resolvedPath;
};

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
// console.log({start, end});
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


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(cookieParser());

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/user', adminauth);
app.use('/user', authenticateToken, requestMovie);
app.use('/videos', [videos, alterVideos, deleteVideos]);
app.use('/admin/videos', authenticateToken,  requestMovie);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
  console.log(`Listening on port :${PORT}`);
});