"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const deleteMovieFile_1 = require("../../dbServices/Movies/deleteMovieFile");
const router = express_1.default.Router();
router.get('/delete-movie/:movie_id', async (req, res) => {
    const { movie_id } = req.params;
    const type = "movie";
    try {
        const response = await (0, deleteMovieFile_1.deleteMovie)(movie_id, type);
        response.success ?
            res.status(200).json(response) :
            res.status(302).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(302).json({ success: false, msg: "sever side error", err: error.message });
    }
});
router.get('/delete-episode/:episode_id', async (req, res) => {
    const { episode_id } = req.params;
    const type = "episode";
    try {
        const response = await (0, deleteMovieFile_1.deleteMovie)(episode_id, type);
        response.success ?
            res.status(200).json(response) :
            res.status(302).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(302).json({ success: false, msg: "sever side error", err: error.message });
    }
});
router.get('/delete-season/:season_id', async (req, res) => {
    const { season_id } = req.params;
    const type = "season";
    try {
        const response = await (0, deleteMovieFile_1.deleteMovie)(season_id, type);
        response.success ?
            res.status(200).json(response) :
            res.status(302).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(302).json({ success: false, msg: "sever side error", err: error.message });
    }
});
router.get('/delete-series/:movie_id', async (req, res) => {
    const { movie_id } = req.params;
    const type = "series";
    try {
        const response = await (0, deleteMovieFile_1.deleteMovie)(movie_id, type);
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
//# sourceMappingURL=deleteMovies.js.map