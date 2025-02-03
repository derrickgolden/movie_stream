"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jwt = require('jsonwebtoken');
require('dotenv').config();
// const adminAccess = new RevokedAdminCache()
const authenticateToken = async (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ success: false, reLogin: true, msg: "No authentication token: Please log in" });
    }
    try {
        const secretKey = process.env.JWT_SECRET;
        if (!secretKey) {
            throw new Error("JWT_SECRET is not set in environment variables");
        }
        // Try decoding first
        const decoded = jwt.decode(token);
        // Verify the token
        const decodedUser = jwt.verify(token, secretKey);
        req.user = decodedUser;
        next();
    }
    catch (err) {
        // console.error("JWT Verification Error:", err.message);
        return res.status(401).json({
            success: false,
            msg: "Invalid authentication token. Please log in again.",
            reLogin: true,
        });
    }
};
exports.authenticateToken = authenticateToken;
module.exports = {
    authenticateToken: exports.authenticateToken
};
//# sourceMappingURL=authenticateToken.js.map