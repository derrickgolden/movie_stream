"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEpisode = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const SERIES_PATH = process.env.SERIES_PATH;
const getEpisode = (baseurl, num) => {
    try {
        const urlParts = new URL(baseurl);
        const pathnameParts = urlParts.pathname.split('/').filter(Boolean);
        const seriesIndex = pathnameParts.findIndex(p => p.toLowerCase() === 'series');
        if (seriesIndex === -1 || !pathnameParts[seriesIndex + 1] || !pathnameParts[seriesIndex + 2]) {
            return { success: false, error: 'Invalid series URL format' };
        }
        const seriesName = decodeURIComponent(pathnameParts[seriesIndex + 1]);
        const season = pathnameParts[seriesIndex + 2];
        const episodeTag = `S${season.substring(1).padStart(2, '0')}E${parseInt(num).toString().padStart(2, '0')}`;
        const basePath = path_1.default.join(SERIES_PATH, seriesName, season);
        const files = fs_1.default.readdirSync(basePath);
        const videoFile = files.find(f => f.includes(episodeTag) && /\.(mp4|mkv|avi)$/i.test(f)) || "";
        const subtitleFile = files.find(f => f.includes(episodeTag) && /\.(vtt|srt)$/i.test(f)) || "";
        return {
            success: true,
            details: [{
                    episode: num,
                    videoFile,
                    subtitleFile,
                }],
        };
    }
    catch (err) {
        return { success: false, error: err.message };
    }
};
exports.getEpisode = getEpisode;
//# sourceMappingURL=getNextEpisodeAddName.js.map