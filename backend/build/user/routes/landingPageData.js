"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getLandingPageData_1 = require("../dbServices/getLandingPageData");
const router = express_1.default.Router();
router.get('/get', async (req, res) => {
    const { id } = req.user;
    try {
        const response = await (0, getLandingPageData_1.getLandingPageData)(id);
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
//# sourceMappingURL=landingPageData.js.map