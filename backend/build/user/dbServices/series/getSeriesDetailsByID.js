"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeriesDetailsByID = void 0;
const { pool } = require("../../../mysqlSetup");
const getSeriesDetailsByID = async (user_id, movie_id) => {
    const connection = await pool.getConnection();
    try {
        var [res] = await connection.query(`
            SELECT 
                ts.movie_id AS video_id,
                ts.title,
                ts.description,
                ts.release_date,
                ts.is_series,
                ts.backdrop_path,
                ts.poster_path,
                COALESCE(
                    (
                        SELECT JSON_OBJECT(
                            'episode_id', swp.episode_id,
                            'progress', swp.progress,
                            'completed', swp.completed
                        )
                        FROM series_watch_progress swp
                        JOIN episodes e ON swp.episode_id = e.episode_id
                        WHERE e.season_id IN (
                            SELECT season_id FROM season_info WHERE movie_id = ts.movie_id
                        ) AND swp.user_id = ?
                        ORDER BY swp.updated_at DESC
                        LIMIT 1
                    ), 
                    JSON_OBJECT('episode_id', NULL, 'progress', 0, 'completed', FALSE)
                ) AS watch_progress,
                JSON_ARRAYAGG(
                    JSON_OBJECT(
                        'season_id', si.season_id,
                        'season_name', si.season_name,
                        'season_order', si.season_order,
                        'trailer_url', si.trailer_url,
                        'episodes', COALESCE(
                            (
                                SELECT 
                                    JSON_ARRAYAGG(
                                        JSON_OBJECT(
                                            'episode_id', e.episode_id,
                                            'episode_name', e.episode_name,
                                            'episode_order', e.episode_order,
                                            'episode_no', e.episode_no,
                                            'thumbnail_path', e.thumbnail_path,
                                            'video_url', e.url,
                                            'subtitles_url', e.subtitles_url,
                                            'overview', e.overview,
                                            'runtime', e.runtime,
                                            'credits_start', e.credits_start,
                                            'id', e.id
                                        )
                                    )
                                FROM episodes e
                                WHERE e.season_id = si.season_id
                            ), 
                            JSON_ARRAY() -- Fallback to an empty array if no episodes exist
                        )
                    )
                ) AS seasons
            FROM 
                tv_series ts
            LEFT JOIN 
                season_info si ON ts.movie_id = si.movie_id
            WHERE 
                ts.movie_id = ? -- ✅ Fetch only the specific series
            GROUP BY 
                ts.movie_id
            ORDER BY 
                ts.id DESC;
            `, [user_id, movie_id] // ✅ Pass user_id and movie_id to filter
        );
        connection.release();
        return {
            success: true,
            msg: `TV Series Details`,
            details: res
        };
    }
    catch (error) {
        console.error("Error:", error.message);
        connection.release();
        return {
            success: false,
            msg: "Database Error",
            err: error.sqlMessage || error.message
        };
    }
};
exports.getSeriesDetailsByID = getSeriesDetailsByID;
module.exports = {
    getSeriesDetailsByID: exports.getSeriesDetailsByID,
};
//# sourceMappingURL=getSeriesDetailsByID.js.map