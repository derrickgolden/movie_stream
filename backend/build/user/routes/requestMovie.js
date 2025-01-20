"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addRequestMovie_1 = require("../dbServices/movieRequests/addRequestMovie");
const getMovieRequest_1 = require("../dbServices/movieRequests/getMovieRequest");
const updateMovieRequestStatus_1 = require("../dbServices/movieRequests/updateMovieRequestStatus");
const router = express_1.default.Router();
router.post('/movie-request', async (req, res) => {
    const { body, user } = req;
    try {
        const response = await (0, addRequestMovie_1.addRequestMovie)(body, user);
        response.success ?
            res.status(200).json(response) :
            res.status(302).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(302).json({ success: false, msg: "sever side error", err: error.message });
    }
});
router.patch('/movie-request-status', async (req, res) => {
    const { body } = req;
    try {
        const response = await (0, updateMovieRequestStatus_1.updateMovieRequestStatus)(body);
        response.success ?
            res.status(200).json(response) :
            res.status(302).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(302).json({ success: false, msg: "sever side error", err: error.message });
    }
});
router.get('/movie-requests', async (req, res) => {
    const { body, user } = req;
    try {
        const response = await (0, getMovieRequest_1.getMovieRequests)();
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
//# sourceMappingURL=requestMovie.js.map