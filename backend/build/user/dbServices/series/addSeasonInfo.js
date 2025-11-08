"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSeasonInfo = void 0;
const { pool } = require("../../../mysqlSetup");
const addSeasonInfo = async (seriesInfo) => {
    const { seasonInfo, seriesDetails } = seriesInfo;
    const { order_no, season_name, trailer_url, isEdit, season_id } = seasonInfo;
    const { id, movie_id } = seriesDetails;
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        if (isEdit) {
            // Insert movies
            var [res] = await connection.query(`
                        UPDATE season_info 
                        SET season_order = ?, season_name = ?, movie_id = ?, trailer_url = ?
                        WHERE season_id = ?
                    `, [order_no, season_name, movie_id, trailer_url, season_id]);
        }
        else {
            // Insert movies
            var [res] = await connection.query(`
                        INSERT INTO season_info (season_order, season_name, movie_id, trailer_url)
                        VALUES (?, ?, ?, ?)
                    `, [order_no, season_name, movie_id, trailer_url]);
        }
        // const movie_id = res.insertId;
        await connection.commit();
        connection.release();
        return {
            success: true,
            msg: `Season Info Added`,
            details: [{ movie_id, id }]
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
exports.addSeasonInfo = addSeasonInfo;
module.exports = {
    addSeasonInfo: exports.addSeasonInfo,
};
//# sourceMappingURL=addSeasonInfo.js.map