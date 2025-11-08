"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postFeedback_1 = require("../dbServices/feedBack/postFeedback");
const getAllFeedbacks_1 = require("../dbServices/feedBack/getAllFeedbacks");
const router = express_1.default.Router();
router.post('/post', async (req, res) => {
    const { body, user } = req;
    try {
        const response = await (0, postFeedback_1.postFeedback)(body, user);
        response.success ?
            res.status(200).json(response) :
            res.status(302).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(302).json({ success: false, msg: "sever side error", err: error.message });
    }
});
router.get('/all', async (req, res) => {
    try {
        const response = await (0, getAllFeedbacks_1.getAllFeedbacks)();
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
//# sourceMappingURL=feedback.js.map