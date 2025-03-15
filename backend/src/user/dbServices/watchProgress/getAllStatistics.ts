import { RowDataPacket } from "mysql2";
import { universalResponse } from "user/types/universalResponse";
const { pool } = require("../../../mysqlSetup");

export const getStatisticsDetails = async (): Promise<universalResponse> => {
    const connection: RowDataPacket = await pool.getConnection();
    try {
        var [res] = await connection.query(
            `
            SELECT 
                (SELECT COUNT(*) FROM movies) AS total_movies,
                (SELECT COUNT(*) FROM tv_series) AS total_tv_series,
                (SELECT COUNT(*) FROM episodes) AS total_episodes,
                (SELECT COUNT(*) FROM users WHERE last_login IS NOT NULL) AS active_users;

            `,
        );

        connection.release();

        return {
            success: true,
            msg: `Statistics Details`,
            details: res
        };
    } catch (error) {
        console.error("Error:", error.message);
        connection.release();

        if (error.sqlMessage) {
            return { success: false, msg: "Database Error", err: error.sqlMessage };
        } else {
            return { success: false, msg: "Database Error", err: error.message };
        }
    }
};

module.exports = {
    getStatisticsDetails,
};
