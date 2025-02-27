"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSubtitles = void 0;
const { pool } = require("../../../mysqlSetup");
const updateSubtitles = async (user) => {
    const { id } = user;
    let connection = null;
    try {
        connection = await pool.getConnection();
        await connection.beginTransaction();
        const [result] = await connection.query(`
            UPDATE settings 
            SET show_subtitles = NOT show_subtitles
            WHERE user_id = ?`, [id]);
        console.log({ id });
        await connection.commit();
        return {
            success: true,
            msg: `Subtitles updated successfully`,
            details: []
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
exports.updateSubtitles = updateSubtitles;
module.exports = {
    updateSubtitles: exports.updateSubtitles,
};
//# sourceMappingURL=updateSubtitle.js.map