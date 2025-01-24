"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeriesDetails = void 0;
const { pool } = require("../../../mysqlSetup");
const getSeriesDetails = async () => {
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
            GROUP BY 
                ts.movie_id
            ORDER BY 
                ts.id DESC;
        `);
        connection.release();
        return {
            success: true,
            msg: `Tv Series List`,
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
exports.getSeriesDetails = getSeriesDetails;
module.exports = {
    getSeriesDetails: exports.getSeriesDetails,
};
//# sourceMappingURL=getSeriesDetails.js.map