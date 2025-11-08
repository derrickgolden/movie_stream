"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAuthToken = generateAuthToken;
const jwt = require('jsonwebtoken');
require('dotenv').config();
function generateAuthToken(id, account, account2, phone, mac, prevelages, expiresInDays) {
    // Calculate the expiration date based on the provided expiresInDays
    const exp_date = new Date();
    exp_date.setDate(exp_date.getDate() + expiresInDays);
    // Generate a token with the specified expiration time
    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
        throw new Error("JWT_SECRET is not defined in environment variables");
    }
    const token = jwt.sign({
        id, account, account2, phone, mac, prevelages
    }, secretKey, {
        expiresIn: `${expiresInDays}d`
    });
    return { token, exp_date };
}
//# sourceMappingURL=generateToken.js.map