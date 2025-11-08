"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGenres = exports.addMovieDetails = void 0;
const { pool } = require("../../../mysqlSetup");
const addMovieDetails = async (movieDetails) => {
    const { adult, backdrop_path, description, id, poster_path, release_date, runtime, slug, title, type, genres } = movieDetails;
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        // Insert movies
        // console.log(genres);
        var [res] = await connection.query(`
                INSERT INTO ${type === "movie" ? "movies" : "tv_series"} 
                (adult, backdrop_path, description, movie_id, poster_path, release_date, runtime, slug, title)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `, [adult, backdrop_path, description, id, poster_path, release_date, runtime, slug, title]);
        const insert_id = res.insertId;
        // Insert genres into categories while ignoring duplicates
        if (genres && genres.length > 0) {
            const values = genres.map(({ id: genre_id }) => `(${genre_id}, ${type === "movie" ? id : "NULL"}, ${type === "movie" ? "NULL" : id})`).join(", ");
            const [res] = await connection.query(`
                    INSERT INTO categories (genre_id, movie_id, series_id)
                    VALUES ${values};
                `);
        }
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
const updateGenres = async (movieDetails) => {
    const { genres, is_series, id } = movieDetails;
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        if (genres && genres.length > 0) {
            const values = genres.map(({ id: genre_id }) => `(${genre_id}, ${is_series ? id : "NULL"}, ${is_series ? "NULL" : id})`).join(", ");
            const [res] = await connection.query(`
                    INSERT INTO categories (genre_id, series_id, movie_id)
                    VALUES ${values};
                `);
        }
        await connection.commit();
        connection.release();
        return {
            success: true,
            msg: `Movie Details Updated`,
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
exports.updateGenres = updateGenres;
module.exports = {
    addMovieDetails: exports.addMovieDetails,
    updateGenres: exports.updateGenres
};
//# sourceMappingURL=addMovieDetails.js.map