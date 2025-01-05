"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
require('dotenv').config();
const auth_1 = __importDefault(require("./user/routes/auth"));
const shop_1 = __importDefault(require("./user/routes/shop"));
const getMoviesList_1 = __importDefault(require("./user/routes/movies/getMoviesList"));
const uploadMovie_1 = __importDefault(require("./user/routes/movies/uploadMovie"));
const deleteMovies_1 = __importDefault(require("./user/routes/movies/deleteMovies"));
const authenticateToken_1 = require("./user/middlewares/authenticateToken");
const loadMime = async () => {
    const { default: mime } = await import('mime'); // Dynamic ESM import
    return mime;
};
// Set up multer storage for file uploads
const storage = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        const absolutePath = path_1.default.resolve(__dirname, 'uploads');
        if (!fs_1.default.existsSync(absolutePath)) {
            fs_1.default.mkdirSync(absolutePath, { recursive: true });
        }
        callback(null, absolutePath);
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
const app = (0, express_1.default)();
// Enable CORS with specific origin
app.use((0, cors_1.default)());
// Handle preflight requests for all routes
app.options('*', (0, cors_1.default)());
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
const getSafeFilePath = (rootPath, userPath) => {
    const sanitizedPath = path_1.default.normalize(userPath).replace(/^(\.\.(\/|\\|$))+/, ''); // Prevent traversal
    const resolvedPath = path_1.default.join(rootPath, sanitizedPath);
    // Ensure the resolved path is within the root directory
    if (!resolvedPath.startsWith(path_1.default.resolve(rootPath))) {
        console.warn(`Blocked attempt to access: ${resolvedPath}`);
        return null;
    }
    return resolvedPath;
};
const videoStat = async (videoPath, req, res) => {
    try {
        const mime = await loadMime();
        const stats = await fs_1.default.promises.stat(videoPath);
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
            const videoStream = fs_1.default.createReadStream(videoPath, { start, end });
            res.writeHead(206, {
                'Content-Range': `bytes ${start}-${end}/${videoSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunkSize,
                'Content-Type': mimeType, // Automatically handled
            });
            videoStream.pipe(res);
        }
        else {
            res.writeHead(200, {
                'Content-Length': videoSize,
                'Content-Type': mimeType, // Automatically handled
            });
            fs_1.default.createReadStream(videoPath).pipe(res);
        }
    }
    catch (err) {
        console.error(`Error accessing file at ${videoPath}:`, err.message);
        res.status(404).send('Video not found');
    }
};
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
// Serve static files
app.use('/js', express_1.default.static(path_1.default.join(__dirname, 'dist', 'assets', 'index-TSNK7VKS.js')));
app.use(express_1.default.static(path_1.default.join(__dirname, 'dist')));
// Define static paths for TV and other devices
const tvPath = path_1.default.join(__dirname, 'dist');
const laptopPath = path_1.default.join(__dirname, 'dist');
// Uncomment this block if you'd like to serve different content for TVs
// app.use((req, res, next) => {
//   const userAgent = req.get('User-Agent');
//   if (userAgent.includes('SmartTV') || userAgent.includes('Tizen') || userAgent.includes('WebOS') || userAgent.includes('AndroidTV')) {
//     express.static(tvPath)(req, res, next); // Serve TV content
//   } else {
//     express.static(laptopPath)(req, res, next); // Serve Laptop content
//   }
// });
app.use('/user', auth_1.default);
app.use('/user', upload.single('logo'), authenticateToken_1.authenticateToken, shop_1.default);
app.use('/videos', [getMoviesList_1.default, uploadMovie_1.default, deleteMovies_1.default]);
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads')));
app.listen(3000, '0.0.0.0', () => {
    console.log(`Listening on http://<your-ip-address>:3000`);
});
// Define your HTTPS server
// const port = process.env.SERVERPORT || 8443;
// https.createServer(sslOptions, app).listen(port, () => {
//   console.log(`Listening on https://localhost:${port}`);
// });
//# sourceMappingURL=app.js.map