"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSettings = void 0;
const { pool } = require("../../../mysqlSetup");
const getSettings = async (user) => {
    const { id } = user;
    let connection = null;
    try {
        connection = await pool.getConnection();
        await connection.beginTransaction();
        const [result] = await connection.query(`
            SELECT * FROM settings 
            WHERE user_id = ?`, [id]);
        await connection.commit();
        return {
            success: true,
            msg: `Setting Details`,
            details: result
        };
    }
    catch (error) {
        if (connection)
            await connection.rollback(); // Rollback on error
        console.error("Error:", error.message);
        return {
            success: false,
            msg: error.sqlMessage || error.message
        };
    }
    finally {
        if (connection)
            connection.release(); // Ensure release happens
    }
};
exports.getSettings = getSettings;
module.exports = {
    getSettings: exports.getSettings,
};
//# sourceMappingURL=getSettings.js.map