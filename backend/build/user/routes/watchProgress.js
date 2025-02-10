"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postWatchProgress_1 = require("../dbServices/watchProgress/postWatchProgress");
const router = express_1.default.Router();
router.post('/watch-progress', async (req, res) => {
    const { body, user } = req;
    try {
        const response = await (0, postWatchProgress_1.postMovieProgress)(body, user);
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
//# sourceMappingURL=watchProgress.js.map