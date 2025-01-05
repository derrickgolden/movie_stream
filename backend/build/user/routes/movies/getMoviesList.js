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
    // console.log(req);
    // res.status(200).send({success: true, msg: "Movie Details", 
    //     details: [
    //     {
    //         video_id: 1,
    //         url: "http://192.168.0.112/video/After.Earth.2013.720p.BluRay.x264.YIFY.mp4", 
    //         title: "After Earth", 
    //         overview: "Dreaming of going pro, a young fighter struggles to be seen until an unexpected face-off lands him a shot at the big time — and a ruthless rivalry.",
    //         backdrop_path: "https://media.themoviedb.org/t/p/w533_and_h300_bestv2/958IEMxVqU3FFOdZll3PcFLoyef.jpg",
    //         poster_path: "https://image.tmdb.org/t/p/w300//iXMvYIlzzJBs352CfeiQcBvovZt.jpg",
    //     },
    //     {
    //         video_id: 2,
    //         url: "http://192.168.0.112/video/Amor.Emanuelle.2023.720p.WEBRip.800MB.x264-GalaxyRG.mkv", 
    //         title: "Amor Emanuelle", 
    //         overview: "A young woman is introduced to the new world of the rich and famous only to discover its dark and dangerous side.",
    //         backdrop_path: "https://media.themoviedb.org/t/p/w533_and_h300_bestv2/lyKlESZJLlW2dFzWYlk7g078oD8.jpg",
    //         poster_path: "https://media.themoviedb.org/t/p/w220_and_h330_face/6PiDoN6Mtc9Zo5qnVc5VUOtFmNI.jpg",
    //     },
    // ]})
    try {
        const response = await (0, getMoviesList_1.getMoviesList)();
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
    try {
        const response = await (0, getSeriesDetails_1.getSeriesDetails)();
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