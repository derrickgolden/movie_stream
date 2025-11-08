"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const updateSubtitle_1 = require("../dbServices/settings/updateSubtitle");
const getSettings_1 = require("../dbServices/settings/getSettings");
const router = express_1.default.Router();
router.patch('/subtitle', async (req, res) => {
    const { user } = req;
    try {
        const response = await (0, updateSubtitle_1.updateSubtitles)(user);
        response.success ?
            res.status(200).json(response) :
            res.status(302).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(302).json({ success: false, msg: "sever side error", err: error.message });
    }
});
router.get('/subtitle', async (req, res) => {
    const { user } = req;
    try {
        const response = await (0, getSettings_1.getSettings)(user);
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
//# sourceMappingURL=settings.js.map