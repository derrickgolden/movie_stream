"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAuthToken = void 0;
const jwt = require('jsonwebtoken');
require('dotenv').config();
function generateAuthToken(id, account, account2, phone, prevelages, expiresInDays) {
    // Calculate the expiration date based on the provided expiresInDays
    const exp_date = new Date();
    exp_date.setDate(exp_date.getDate() + expiresInDays);
    // Generate a token with the specified expiration time
    const key = "skajskdhcdhsjhdwe836";
    const token = jwt.sign({
        id, account, account2, phone, prevelages
    }, key, {
        expiresIn: `${expiresInDays}d`
    });
    return { token, exp_date };
}
exports.generateAuthToken = generateAuthToken;
//# sourceMappingURL=generateToken.js.map