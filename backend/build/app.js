"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
require('dotenv').config();
const auth_1 = __importDefault(require("./user/routes/auth"));
const getMoviesList_1 = __importDefault(require("./user/routes/movies/getMoviesList"));
const uploadMovie_1 = __importDefault(require("./user/routes/movies/uploadMovie"));
const deleteMovies_1 = __importDefault(require("./user/routes/movies/deleteMovies"));
const requestMovie_1 = __importDefault(require("./user/routes/requestMovie"));
const feedback_1 = __importDefault(require("./user/routes/feedback"));
const watchProgress_1 = __importDefault(require("./user/routes/watchProgress"));
const getPosters_1 = __importDefault(require("./user/routes/getPosters"));
const customers_1 = __importDefault(require("./user/routes/customers"));
const settings_1 = __importDefault(require("./user/routes/settings"));
const statistics_1 = __importDefault(require("./user/routes/statistics"));
const categories_1 = __importDefault(require("./user/routes/categories"));
const authenticateToken_1 = require("./user/middlewares/authenticateToken");
const SERIES_PATH = process.env.SERIES_PATH;
const VIDEO_PATH = process.env.VIDEO_PATH;
const PORT = Number(process.env.BACKEND_PORT);
const loadMime = async () => {
    const { default: mime } = await import('mime'); // Dynamic ESM import
    return mime;
};
const app = (0, express_1.default)();
// Enable CORS with specific origin
app.use((0, cors_1.default)());
// Handle preflight requests for all routes
app.options('*', (0, cors_1.default)());
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
    const videoPath = getSafeFilePath(SERIES_PATH, filename);
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
app.use(express_1.default.static(path_1.default.join(__dirname, 'dist')));
app.use('/user', auth_1.default);
app.use('/posters', getPosters_1.default);
app.use('/user', authenticateToken_1.authenticateToken, [watchProgress_1.default, requestMovie_1.default]);
app.use('/user/settings', authenticateToken_1.authenticateToken, settings_1.default);
app.use('/user/categories', authenticateToken_1.authenticateToken, categories_1.default);
app.use('/user/feedback', authenticateToken_1.authenticateToken, feedback_1.default);
app.use('/admin/feedback', authenticateToken_1.authenticateToken, feedback_1.default);
app.use('/videos', authenticateToken_1.authenticateToken, [getMoviesList_1.default, uploadMovie_1.default, deleteMovies_1.default]);
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads')));
app.use('/admin/videos', authenticateToken_1.authenticateToken, requestMovie_1.default);
app.use('/admin/clients', authenticateToken_1.authenticateToken, customers_1.default);
app.use('/admin/statistics', authenticateToken_1.authenticateToken, statistics_1.default);
app.listen(PORT, () => {
    console.log(`Listening on port :${PORT}`);
});
//# sourceMappingURL=app.js.map