"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getMoviesList_1 = require("../../dbServices/Movies/getMoviesList");
const getSeriesSeasonsById_1 = require("../../dbServices/series/getSeriesSeasonsById");
const getSeriesDetails_1 = require("../../dbServices/series/getSeriesDetails");
const router = express_1.default.Router();
router.get('/get-movies', async (req, res) => {
    const { id } = req.user;
    try {
        const response = await (0, getMoviesList_1.getMoviesList)(id);
        response.success ?
            res.status(200).json(response) :
            res.status(302).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(302).json({ success: false, msg: "sever side error", err: error.message });
    }
});
router.get('/get-seasons-episodes/:movie_id', async (req, res) => {
    const { movie_id } = req.params;
    try {
        const response = await (0, getSeriesSeasonsById_1.getSeriesSeasonsEpisodeById)(movie_id);
        response.success ?
            res.status(200).json(response) :
            res.status(302).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(302).json({ success: false, msg: "sever side error", err: error.message });
    }
});
router.get('/get-series', async (req, res) => {
    const { id } = req.user;
    try {
        const response = await (0, getSeriesDetails_1.getSeriesDetails)(id);
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
//# sourceMappingURL=getMoviesList.js.map