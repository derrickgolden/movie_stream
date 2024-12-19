import express, { Request, Response } from 'express';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

require('dotenv').config();

import adminauth from './user/routes/auth';
import shop from './user/routes/shop';
import videos from './user/routes/movies/getMoviesList';
import alterVideos from './user/routes/movies/uploadMovie';
import { authenticateToken } from './user/middlewares/authenticateToken';

const loadMime = async () => {
  const { default: mime } = await import('mime'); // Dynamic ESM import
  return mime;
};

// Set up multer storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const absolutePath = path.resolve(__dirname, 'uploads');
    if (!fs.existsSync(absolutePath)) {
      fs.mkdirSync(absolutePath, { recursive: true });
    }
    callback(null, absolutePath);
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

const app = express();
// Enable CORS with specific origin
app.use(cors());
// Handle preflight requests for all routes
app.options('*', cors());

// Example route: Serve video files
app.get('/video/:filename(*)', (req, res) => {
  const { filename } = req.params;
  const videoPath = getSafeFilePath('E:/videos', filename);
  if (!videoPath) {
    return res.status(400).send('Invalid file path');
  }
  videoStat(videoPath, req, res);
});

app.get('/series/:filename(*)', (req, res) => {
  const { filename } = req.params;
  const videoPath = getSafeFilePath('E:/series', filename);
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
app.use('/js', express.static(path.join(__dirname, 'dist', 'assets', 'index-TSNK7VKS.js')));
app.use(express.static(path.join(__dirname, 'dist')));

// Define static paths for TV and other devices
const tvPath = path.join(__dirname, 'dist');
const laptopPath = path.join(__dirname, 'dist');

// Uncomment this block if you'd like to serve different content for TVs
// app.use((req, res, next) => {
//   const userAgent = req.get('User-Agent');
//   if (userAgent.includes('SmartTV') || userAgent.includes('Tizen') || userAgent.includes('WebOS') || userAgent.includes('AndroidTV')) {
//     express.static(tvPath)(req, res, next); // Serve TV content
//   } else {
//     express.static(laptopPath)(req, res, next); // Serve Laptop content
//   }
// });

app.use('/user', adminauth);
app.use('/user', upload.single('logo'), authenticateToken, shop);
app.use('/videos', [videos, alterVideos]);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(3000, '0.0.0.0', () => {
  console.log(`Listening on http://<your-ip-address>:3000`);
});


// Define your HTTPS server
// const port = process.env.SERVERPORT || 8443;
// https.createServer(sslOptions, app).listen(port, () => {
//   console.log(`Listening on https://localhost:${port}`);
// });
