import { NextFunction, Request, Response } from "express";

const allowedIP = "12.0.0.1";

export const validateIP = (req: Request, res: Response, next: NextFunction) => {
    const userIP = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    console.log(`User IP: ${userIP}`);

    if (userIP === allowedIP) {
        next(); // Allow access
    } else {
        res.status(302).json({success: false, message: "Access denied. Login from JAPTECH network." });
    }
};



