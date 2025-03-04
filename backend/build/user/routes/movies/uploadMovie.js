"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addMovieDetails_1 = require("../../dbServices/Movies/addMovieDetails");
const addMoviePath_1 = require("../../dbServices/Movies/addMoviePath");
const addSeasonInfo_1 = require("../../dbServices/series/addSeasonInfo");
const addEpisodeData_1 = require("../../dbServices/series/addEpisodeData");
const router = express_1.default.Router();
router.post('/add/movie-details', async (req, res) => {
    const movieDetails = req.body;
    try {
        const response = await (0, addMovieDetails_1.addMovieDetails)(movieDetails);
        response.success ?
            res.status(200).json(response) :
            res.status(302).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(302).json({ success: false, msg: "sever side error", err: error.message });
    }
});
router.patch('/update-genres', async (req, res) => {
    const movieDetails = req.body;
    try {
        const response = await (0, addMovieDetails_1.updateGenres)(movieDetails);
        response.success ?
            res.status(200).json(response) :
            res.status(302).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(302).json({ success: false, msg: "sever side error", err: error.message });
    }
});
router.post('/add/movie-path', async (req, res) => {
    const movieDetails = req.body;
    try {
        const response = await (0, addMoviePath_1.addMoviePath)(movieDetails);
        response.success ?
            res.status(200).json(response) :
            res.status(302).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(302).json({ success: false, msg: "sever side error", err: error.message });
    }
});
router.post('/add/season-info', async (req, res) => {
    const body = req.body;
    try {
        const response = await (0, addSeasonInfo_1.addSeasonInfo)(body);
        response.success ?
            res.status(200).json(response) :
            res.status(302).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(302).json({ success: false, msg: "sever side error", err: error.message });
    }
});
router.post('/add/episode-info', async (req, res) => {
    const body = req.body;
    try {
        const response = await (0, addEpisodeData_1.addEpisodeData)(body);
        response.success ?
            res.status(200).json(response) :
            res.status(302).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(302).json({ success: false, msg: "sever side error", err: error.message });
    }
});
exports.default = router;
//# sourceMappingURL=uploadMovie.js.map