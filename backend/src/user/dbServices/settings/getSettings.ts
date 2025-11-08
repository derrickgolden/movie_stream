import { PoolConnection } from "mysql2/promise";
import { TokenUser, universalResponse } from "user/types/universalResponse";
const { pool } = require("../../../mysqlSetup");

export const getSettings = async (user: TokenUser): Promise<universalResponse> => {
    const { id } = user;
    let connection: PoolConnection | null = null;

    try {
        connection = await pool.getConnection();
        await connection.beginTransaction();

        const [result] : any = await connection.query(
            `
            SELECT * FROM settings 
            WHERE user_id = ?`, 
            [id]
        );

        await connection.commit();

        return {
            success: true,
            msg: `Setting Details`,
            details: result
        };
    } catch (error) {
        if (connection) await connection.rollback(); // Rollback on error
        console.error("Error:", error.message);

        return {
            success: false,
            msg: error.sqlMessage || error.message
        };
    } finally {
        if (connection) connection.release(); // Ensure release happens
    }
};

module.exports = {
    getSettings,
};
