"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMoviesList = void 0;
const { pool } = require("../../../mysqlSetup");
const getMoviesList = async () => {
    const connection = await pool.getConnection();
    try {
        var [res] = await connection.query(`
            SELECT 
                movies.movie_id AS video_id,
                movies.title,
                movies.slug,
                movies.description,
                movies.runtime,
                movies.release_date,
                movies.backdrop_path,
                movies.poster_path,
                movies.is_series,
                movie_files.id AS movie_files_id,
                movie_files.label,
                movie_files.\`order\` AS file_order,
                movie_files.url AS video_url,
                movie_files.created_at,
                movie_files.updated_at,
                movie_files.trailer_url,
                movie_files.subtitles_url
            FROM 
                movies
                LEFT JOIN 
                movie_files 
            ON 
                movies.movie_id = movie_files.movie_id
            ORDER BY 
                movies.created_at DESC;
        `, []);
        connection.release();
        return {
            success: true,
            msg: `Movie List`,
            details: res
        };
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
exports.getMoviesList = getMoviesList;
module.exports = {
    getMoviesList: exports.getMoviesList,
};
//# sourceMappingURL=getMoviesList.js.map