import { NextFunction, Request, Response } from "express";
import { ActivePPPoEClient } from "./types";
require('dotenv').config();
const RosApi = require("node-routeros").RouterOSAPI;

const MIKROTIK_HOST = process.env.MIKROTIK_HOST;
const MIKROTIK_USER = process.env.MIKROTIK_USER;
const MIKROTIK_PASSWORD = process.env.MIKROTIK_PASSWORD;
const MIKROTIK_PORT = process.env.MIKROTIK_PORT;

const MIKROTIK_CONFIG = {
    host: MIKROTIK_HOST,
    user: MIKROTIK_USER,
    password: MIKROTIK_PASSWORD,
    port: MIKROTIK_PORT
};

/**
 * Connects to MikroTik and retrieves active PPPoE users.
 */
export const checkActivePPPoEUser = async (mac: string): Promise<ActivePPPoEClient> => {
    const conn = new RosApi(MIKROTIK_CONFIG);

    try {
        await conn.connect();
        const activePPPoEUsers: {}[] = await conn.write("/ppp/active/print", []);
        const formattedUsers: ActivePPPoEClient[] = activePPPoEUsers.map((user: any) => ({
            id: user[".id"],
            name: user.name,
            service: user.service,
            callerId: user["caller-id"] || "",
            address: user.address || "",
            uptime: user.uptime,
            encoding: user.encoding || "",
            sessionId: user["session-id"] || "",
            limitBytesIn: parseInt(user["limit-bytes-in"] || "0", 10),
            limitBytesOut: parseInt(user["limit-bytes-out"] || "0", 10),
            radius: user.radius === "true",
        }));

        conn.close();

        const client = formattedUsers.find((c) => c.callerId === mac);
        return client;
    } catch (err) {
        console.error("Error connecting to MikroTik:", err);
        conn.close();
        throw err;
    }
};

/**
 * Middleware to check if a client is an active PPPoE user.
 */
export const connectToMikroTik = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const mac = "B0:95:75:5A:7D:FB";

    try {
        const client = await checkActivePPPoEUser(mac);

        if (client) {
            console.log(client);
            return next();
        }

        res.status(403).json({
            success: false,
            msg: "You are not an active client of JAPTECH. Contact ISP.",
            details: [],
        });
    } catch {
        res.status(500).json({
            success: false,
            msg: "Failed to connect to Login! Try again later or contact ISP.",
            details: [],
        });
    }
};
