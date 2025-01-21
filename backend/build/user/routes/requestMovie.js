"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addRequestMovie_1 = require("../dbServices/movieRequests/addRequestMovie");
const getMovieRequest_1 = require("../dbServices/movieRequests/getMovieRequest");
const updateMovieRequestStatus_1 = require("../dbServices/movieRequests/updateMovieRequestStatus");
const sendText_1 = require("../controllers/auth/sendText");
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
    const { status, row } = body;
    const { name, phone, movie_name, movie_request_id } = row;
    try {
        const response = await (0, updateMovieRequestStatus_1.updateMovieRequestStatus)({ status, movie_request_id });
        if (response.success) {
            let text = "";
            status === "uploaded" ?
                text = `Hi ${name}, your movie ${movie_name.toUpperCase()} is now available to enjoy at japtech.africa. Thank you for choosing JAPTECH!` :
                status === "inProgress" ?
                    text = `Hi ${name}, your movie ${movie_name.toUpperCase()} is currently being processed and will soon be ready to enjoy at japtech.africa. Thank you for choosing JAPTECH!` :
                    status === "cancelled" ?
                        text = `Hi ${name}, we regret to inform you that your movie ${movie_name.toUpperCase()} has been canceled. Main reason for canceling is normally we were unable to find the movie. Thank you for choosing JAPTECH!` :
                        null;
            const sendPhone = "+" + phone;
            (0, sendText_1.sendSMS)([sendPhone], text).then((data) => {
                data.success ?
                    res.status(200).json(response) :
                    res.status(200).json({ success: true, msg: "Status updated but the client might have not received a notificaton" });
            });
        }
        else {
            res.status(302).json(response);
        }
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