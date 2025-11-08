"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getMoviesSeriesCategories_1 = require("../dbServices/getMoviesSeriesCategories");
const router = express_1.default.Router();
router.get('/get', async (req, res) => {
    const { id } = req.user;
    try {
        const response = await (0, getMoviesSeriesCategories_1.getMoviesSeriesCategoriesList)(id);
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
//# sourceMappingURL=categories.js.map