"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIP = void 0;
const allowedIP = "12.0.0.1";
const validateIP = (req, res, next) => {
    const userIP = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log(`User IP: ${userIP}`);
    if (userIP === allowedIP) {
        next(); // Allow access
    }
    else {
        res.status(302).json({ success: false, message: "Access denied. Login from JAPTECH network." });
    }
};
exports.validateIP = validateIP;
//# sourceMappingURL=validateIP.js.map