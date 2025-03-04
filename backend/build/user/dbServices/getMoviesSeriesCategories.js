"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMoviesSeriesCategoriesList = void 0;
const { pool } = require("../../mysqlSetup");
const getMoviesSeriesCategoriesList = async (user_id) => {
    const connection = await pool.getConnection();
    try {
        var [res] = await connection.query(`
            SELECT 
                g.id AS genre_id,
                g.name AS genre_name,
                COALESCE(
                    (
                        SELECT JSON_ARRAYAGG(
                            JSON_OBJECT(
                                'video_id', COALESCE(m.movie_id, s.movie_id),
                                'title', COALESCE(m.title, s.title),
                                'is_series', CASE WHEN m.movie_id IS NOT NULL THEN 0 ELSE 1 END,
                                'description', COALESCE(m.description, s.description),
                                'poster_path', COALESCE(m.poster_path, s.poster_path)
                            )
                        )
                        FROM categories c
                        LEFT JOIN movies m ON c.movie_id = m.movie_id
                        LEFT JOIN tv_series s ON c.series_id = s.movie_id
                        WHERE c.genre_id = g.id
                    ),
                    JSON_ARRAY()
                ) AS movies_series
            FROM genres g
            ORDER BY g.id; `);
        connection.release();
        const filterRes = res.filter((r) => r.movies_series.length);
        return {
            success: true,
            msg: `Categories`,
            details: filterRes
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
exports.getMoviesSeriesCategoriesList = getMoviesSeriesCategoriesList;
module.exports = {
    getMoviesSeriesCategoriesList: exports.getMoviesSeriesCategoriesList,
};
//# sourceMappingURL=getMoviesSeriesCategories.js.map