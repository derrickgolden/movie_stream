"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const express_1 = __importDefault(require("express"));
const getSafeFilePath_1 = __importDefault(require("./getSafeFilePath"));
const SERIES_PATH = process.env.SERIES_PATH;
const VIDEO_PATH = process.env.VIDEO_PATH;
const router = express_1.default.Router();
/**
 * Shift timestamps in a WebVTT (.vtt) subtitle file by a given number of seconds.
 *
 * @param filePath - The path to the .vtt file to modify.
 * @param shiftSeconds - The number of seconds to shift subtitles (can be negative).
 */
function shiftVTT(filePath, shiftSeconds) {
    const tempPath = `${filePath}.tmp`;
    const data = fs.readFileSync(filePath, 'utf8');
    const shiftedData = data.replace(/(\d{2}):(\d{2}):(\d{2})\.(\d{3})/g, (_match, hh, mm, ss, ms) => {
        let time = parseInt(hh) * 3600 +
            parseInt(mm) * 60 +
            parseInt(ss) +
            parseInt(ms) / 1000;
        time += shiftSeconds;
        if (time < 0)
            time = 0;
        const newH = String(Math.floor(time / 3600)).padStart(2, '0');
        const newM = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
        const newS = String(Math.floor(time % 60)).padStart(2, '0');
        const newMs = String(Math.floor((time * 1000) % 1000)).padStart(3, '0');
        return `${newH}:${newM}:${newS}.${newMs}`;
    });
    fs.writeFileSync(tempPath, shiftedData, 'utf8');
    fs.renameSync(tempPath, filePath); // Overwrite original file safely
}
router.post('/sync', async (req, res) => {
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
        const baseUrl = is_series ? 'https://japtech.africa/series/' : 'https://japtech.africa/video/';
        const cleanPath = subtitlesUrl.split('?')[0];
        const relativeUrl = cleanPath.replace(baseUrl, '');
        const filePath = is_series ? (0, getSafeFilePath_1.default)(SERIES_PATH, relativeUrl) : (0, getSafeFilePath_1.default)(VIDEO_PATH, relativeUrl);
        shiftVTT(filePath, Number(synSubtitles));
        return res.status(200).json({ success: true,
            msg: 'Subtitles shifted successfully',
            details: [{ subtitlesUrl: cleanPath, movieUrl }]
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, msg: 'Server side error', err: error.message });
    }
});
exports.default = router;
//# sourceMappingURL=syncSubtitles.js.map