"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var bcrypt = require('bcryptjs');
const router = express_1.default.Router();
const { loginUser, resetPassword, storeLinkToken, signupUser, getCode, updateLogin } = require('../dbServices/auth');
// const { sendText } = require('../controllers/sendText');
// const { generateRandomVerificationCode } = require('../controllers/randomCode');
const generateToken_1 = require("../controllers/auth/generateToken");
const authenticateToken_1 = require("../middlewares/authenticateToken");
const sendText_1 = require("../../user/controllers/auth/sendText");
const validateMacAddress_1 = require("../middlewares/validateMacAddress");
const { getUserDetailsByPhone } = require('../dbServices/users/getUsersByPhone');
const { sendEmail } = require('../controllers/auth/sendEmail');
const { hashCode } = require('../controllers/auth/genResetPassLink');
router.post('/signup', async (req, res) => {
    const { auth_with } = req.body;
    const signupDetails = req.body;
    try {
        if (auth_with === "app") {
            const { password } = req.body;
            const hash = await bcrypt.hash(password, 10);
            var response = await signupUser({ ...signupDetails, hash });
        }
        else if (auth_with === "google") {
            const { name, email, id, picture } = req.body;
            const { first_name, last_name } = separateName(name);
            var response = await signupUser({ first_name, last_name,
                email, id, picture }, auth_with);
        }
        if (response.success) {
            const { phone, account2 } = signupDetails;
            const sendPhone = "+" + phone;
            const text = `Hi ${account2}. Did you know you can watch any movie from our JapTech site. Click the link below or copy it on a browser to enjoy movies for free and use your phone number ${phone} to login. \n japtech.africa `;
            (0, sendText_1.sendSMS)([sendPhone], text).then((data) => {
                data.success ?
                    res.status(200).json(response) :
                    res.status(200).json({ success: true, msg: "Client added might have not received a notificaton" });
            });
        }
        else
            res.status(302).json(response);
    }
    catch (error) {
        res.status(302).json({ success: false, res: error.message });
    }
});
router.post('/login', async (req, res) => {
    const { email, prevelages, phone, password, auth_with } = req.body;
    const response = await loginUser(email, phone, prevelages);
    const { passwordHash, userAvailable, details } = response;
    try {
        if (!userAvailable) {
            res.status(200).send({ success: false, msg: "Details not registered. Contact ISP or Call 0714475702", details: response });
            return;
        }
        const { id, account, account2, phone, prevelages, mac } = details[0];
        if (prevelages === "viewer") {
            const client = await (0, validateMacAddress_1.checkActivePPPoEUser)(mac);
            if (!client) {
                res.status(403).json({
                    success: false,
                    msg: "You are not an active client of JAPTECH. Contact ISP or Call 0714475702",
                    details: [],
                });
                return;
            }
        }
        // generate JWT token
        const expiresInDays = 60;
        const { token, exp_date } = await (0, generateToken_1.generateAuthToken)(id, account, account2, phone, mac, prevelages, expiresInDays);
        if (auth_with === "google") {
            res.status(200).send({ success: true, token, msg: "User Found", details });
            return;
        }
        ;
        const match = await bcrypt.compare(password, passwordHash);
        if (match || prevelages === "viewer") {
            const wrong_pass = false;
            const resp = await updateLogin(wrong_pass, phone, prevelages);
            res.status(200).send({ success: true, token, msg: "User Found", details });
        }
        else {
            res.status(200).send({ success: false, msg: "Incorrect Password" });
        }
        ;
    }
    catch (error) {
        console.log(error);
        res.status(404).send({ success: false, msg: error.message });
    }
    ;
});
router.get('/validate-token', authenticateToken_1.authenticateToken, async (req, res) => {
    const { prevelages, phone, mac } = req.user;
    try {
        const client = await (0, validateMacAddress_1.checkActivePPPoEUser)(mac);
        if (!client) {
            res.status(403).json({
                success: false,
                msg: "You are not an active client of JAPTECH. Contact ISP or Call 0714475702",
                details: [],
            });
            return;
        }
        const wrong_pass = false;
        const response = await updateLogin(wrong_pass, phone, prevelages);
        res.status(200).send({ success: true, msg: "User Found and correct mac" });
    }
    catch (error) {
        console.log(error);
        res.status(404).send({ success: false, msg: "Server side error" });
    }
    ;
});
router.patch('/submit-code', async (req, res) => {
    const { id, user_id, code } = req.body;
    const response = await getCode(id, user_id);
    const { userAvailable, reset_code, updated_at } = response;
    // console.log({email, prevelages, phone, password, auth_with})
    try {
        if (!userAvailable) {
            res.status(200).send({ success: false, msg: "Something went wrong. Try to reset the password again", details: response });
            return;
        }
        const match = await bcrypt.compare(code, reset_code);
        if (match) {
            res.status(200).send({ success: true, msg: "Change password", details: response });
        }
        else {
            res.status(200).send({ success: false, msg: "Invalid Code" });
        }
        ;
    }
    catch (error) {
        console.log(error);
        res.status(404).send({ success: false, msg: error.message });
    }
    ;
});
router.patch('/change-pass', authenticateToken_1.authenticateToken, async (req, res) => {
    const { newPassword, oldPassword } = req.body;
    const { phone } = req.user;
    try {
        const response = await loginUser(phone);
        const { passwordHash } = response;
        const match = await bcrypt.compare(oldPassword, passwordHash);
        if (match) {
            const hash = await bcrypt.hash(newPassword, 10);
            const response = await resetPassword(hash, phone);
            return response.success ?
                res.status(200).send({ success: true,
                    msg: "Password changed, you are required to log in again" }) :
                res.status(400).send(response);
        }
        else {
            res.status(200).send({ success: false, msg: "Incorrect Old Password" });
        }
    }
    catch (error) {
        // console.log(error)
        res.status(404).send({ success: false, err: error.message, msg: "Server side error" });
    }
});
router.patch('/reset-password', async (req, res) => {
    const { password, phone } = req.body;
    try {
        const hash = await bcrypt.hash(password, 10);
        const response = await resetPassword(hash, phone);
        return response.success ?
            res.status(200).send(response) :
            res.status(400).send(response);
    }
    catch (error) {
        console.log(error);
    }
});
router.post('/forgot-password', async (req, res) => {
    const { phone } = req.body;
    try {
        const response = await getUserDetailsByPhone(phone);
        if (response.success) {
            const { id, phone } = response.details[0];
            const { code, hashedCode } = await hashCode();
            const storeCode = await storeLinkToken(id, hashedCode);
            if (storeCode.success) {
                const p = "+" + phone;
                const msg = `Using the following code to reset JAP TECH movies password: ${code}`;
                const resp = await (0, sendText_1.sendSMS)([p], msg);
                resp.success ?
                    res.status(200).send({ success: true, msg: "Code sent", details: storeCode.details }) :
                    res.status(400).send(resp);
                return;
            }
            else {
                res.status(400).send(storeCode);
                return;
            }
        }
        res.status(400).send(response);
    }
    catch (error) {
        console.log(error);
        res.status(400).send({ success: false, msg: "serverside error", error: error.message });
    }
});
const separateName = (name) => {
    const match = name.match(/^(\S+)\s+(\S+)$/);
    if (match) {
        const first_name = match[1];
        const last_name = match[2];
        return { first_name, last_name };
    }
    else {
        return { first_name: name, last_name: "" };
    }
};
exports.default = router;
//# sourceMappingURL=auth.js.map