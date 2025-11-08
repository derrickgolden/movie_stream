"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeriesPosters = void 0;
const { pool } = require("../../../mysqlSetup");
const getSeriesPosters = async () => {
    const connection = await pool.getConnection();
    try {
        var [res] = await connection.query(`
            SELECT * FROM tv_series
        `);
        connection.release();
        return {
            success: true,
            msg: `TV Series List`,
            details: res
        };
    }
    catch (error) {
        console.error("Error:", error.message);
        connection.release();
        if (error.sqlMessage) {
            return { success: false, msg: "Database Error", err: error.sqlMessage };
        }
        else {
            return { success: false, msg: "Database Error", err: error.message };
        }
    }
};
exports.getSeriesPosters = getSeriesPosters;
module.exports = {
    getSeriesPosters: exports.getSeriesPosters,
};
//# sourceMappingURL=getPosters.js.map