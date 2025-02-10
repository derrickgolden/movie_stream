"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserWatchStats = void 0;
const { pool } = require("../../../mysqlSetup");
const getUserWatchStats = async () => {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query(`
            SELECT 
                u.id AS user_id, 
                u.name,
                u.mac, 
                u.apartment, 
                u.phone, 
                u.last_login, 
                COALESCE(COUNT(mwp.movie_id), 0) + COALESCE(COUNT(swp.movie_id), 0) AS total_watched,
                GREATEST(
                    COALESCE(MAX(mwp.updated_at), '0000-00-00'),
                    COALESCE(MAX(swp.updated_at), '0000-00-00')
                ) AS last_watched_at
            FROM users u
            LEFT JOIN movie_watch_progress mwp ON u.id = mwp.user_id
            LEFT JOIN series_watch_progress swp ON u.id = swp.user_id
            GROUP BY u.id
            ORDER BY last_watched_at DESC;
            `);
        connection.release();
        return { success: true, msg: "User Watch Stats", details: rows };
    }
    catch (error) {
        console.error("Error:", error.message);
        connection.release();
        return { success: false, msg: error.sqlMessage || error.message };
    }
};
exports.getUserWatchStats = getUserWatchStats;
//# sourceMappingURL=getCustomers.js.map