"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateActiveSeries = void 0;
const { pool } = require("../../../mysqlSetup");
const updateActiveSeries = async (movieDetails) => {
    const { id, is_active } = movieDetails;
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        const [res] = await connection.query(`
                UPDATE tv_series
                SET is_active = ?
                WHERE movie_id = ?
            `, [is_active, id]);
        await connection.commit();
        connection.release();
        return {
            success: true,
            msg: `Series Status Updated`,
            details: []
        };
    }
    catch (error) {
        console.error('Error:', error.message);
        connection.release();
        if (error.sqlMessage) {
            return { success: false, msg: error.sqlMessage };
        }
        else {
            return { success: false, msg: error.message };
        }
    }
};
exports.updateActiveSeries = updateActiveSeries;
module.exports = {
    updateActiveSeries: exports.updateActiveSeries
};
//# sourceMappingURL=editActiveSeries.js.map