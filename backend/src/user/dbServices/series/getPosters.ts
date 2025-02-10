import { RowDataPacket } from "mysql2";
import { universalResponse } from "user/types/universalResponse";
const { pool } = require("../../../mysqlSetup");

export const  getSeriesPosters = async (): Promise<universalResponse> => {
    const connection: RowDataPacket = await pool.getConnection();
    try {
        var [res] = await connection.query(`
            SELECT * FROM tv_series
        `,);

        connection.release();

        return {
            success: true,
            msg: `TV Series List`,
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
     getSeriesPosters,
};
