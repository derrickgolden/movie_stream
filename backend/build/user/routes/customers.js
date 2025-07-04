"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const deleteUser_1 = require("../dbServices/customers/deleteUser");
const editCustomerDetails_1 = require("../dbServices/customers/editCustomerDetails");
const getCustomers_1 = require("../dbServices/customers/getCustomers");
const getClientWatchedMovies_1 = require("../dbServices/users/getClientWatchedMovies");
const router = express_1.default.Router();
router.get('/delete-user/:user_id', async (req, res) => {
    const { user_id } = req.params;
    try {
        const response = await (0, deleteUser_1.deleteUser)(user_id);
        response.success ?
            res.status(200).json(response) :
            res.status(302).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(302).json({ success: false, msg: "sever side error", err: error.message });
    }
});
router.get('/get-list', async (req, res) => {
    try {
        const response = await (0, getCustomers_1.getUserWatchStats)();
        response.success ?
            res.status(200).json(response) :
            res.status(302).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(302).json({ success: false, msg: "sever side error", err: error.message });
    }
});
router.get('/watched-movies/:user_id', async (req, res) => {
    const { user_id } = req.params;
    try {
        const response = await (0, getClientWatchedMovies_1.getClientWatchedMovies)(user_id);
        response.success ?
            res.status(200).json(response) :
            res.status(302).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(302).json({ success: false, msg: "sever side error", err: error.message });
    }
});
router.patch('/edit-details', async (req, res) => {
    const customerDetails = req.body;
    try {
        const response = await (0, editCustomerDetails_1.editCustomerDetails)(customerDetails);
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
//# sourceMappingURL=customers.js.map