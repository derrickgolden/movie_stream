"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = void 0;
const { pool } = require("../../../mysqlSetup");
const deleteMovie = async (id, type) => {
    const connection = await pool.getConnection();
    try {
        switch (type) {
            case "movie":
                var [res] = await connection.query(`
                    DELETE FROM movies
                    WHERE movie_id = ?
                `, [id]);
                break;
            case "episode":
                var [res] = await connection.query(`
                    DELETE FROM episodes
                    WHERE episode_id = ?
                `, [id]);
                break;
            case "season":
                var [res] = await connection.query(`
                    DELETE FROM season_info
                    WHERE season_id = ?
                `, [id]);
                break;
            case "series":
                var [res] = await connection.query(`
                    DELETE FROM tv_series
                    WHERE movie_id = ?
                `, [id]);
                break;
            default:
                break;
        }
        connection.release();
        const { affectedRows } = res;
        if (affectedRows > 0) {
            return {
                success: true,
                msg: `${type} deleted successfully`,
                details: res
            };
        }
        else {
            return {
                success: false,
                msg: `Oops, ${type} not deleted`,
                details: res
            };
        }
    }
    catch (error) {
        console.error('Error:', error.message);
        connection.release();
        if (error.sqlMessage) {
            return { success: false, msg: "Database Error", err: error.sqlMessage };
        }
        else {
            return { success: false, msg: "Database Error", err: error.message };
        }
    }
};
exports.deleteMovie = deleteMovie;
module.exports = {
    deleteMovie: exports.deleteMovie,
};
//# sourceMappingURL=deleteMovieFile.js.map