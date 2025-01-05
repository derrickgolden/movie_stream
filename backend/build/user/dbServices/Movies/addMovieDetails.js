"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMovieDetails = void 0;
const { pool } = require("../../../mysqlSetup");
const addMovieDetails = async (movieDetails) => {
    const { adult, backdrop_path, description, id, poster_path, release_date, runtime, slug, title, type } = movieDetails;
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        // Insert movies
        var [res] = await connection.query(`
                INSERT INTO ${type === "movie" ? "movies" : "tv_series"} 
                (adult, backdrop_path, description, movie_id, poster_path, release_date, runtime, slug, title)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `, [adult, backdrop_path, description, id, poster_path, release_date, runtime, slug, title]);
        const insert_id = res.insertId;
        await connection.commit();
        connection.release();
        return {
            success: true,
            msg: `Movie Details Added`,
            details: [{ id: insert_id, adult, description, movie_id: id, release_date, slug, title }]
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
exports.addMovieDetails = addMovieDetails;
module.exports = {
    addMovieDetails: exports.addMovieDetails,
};
//# sourceMappingURL=addMovieDetails.js.map