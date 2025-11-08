import { RowDataPacket } from "mysql2";
import { universalResponse } from "user/types/universalResponse";
const { pool } = require("../../../mysqlSetup");

export const getSeriesSeasonsEpisodeById = async ( movie_id: string): Promise<universalResponse> => {

    const connection: RowDataPacket = await pool.getConnection();
    try {
        var [res] = await connection.query(`
             SELECT 
                ts.movie_id,
                ts.title,
                ts.description,
                ts.release_date,
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
                                            'thumbnail_path', e.thumbnail_path,
                                            'url', e.url,
                                            'credits_start', e.credits_start,
                                            'runtime', e.runtime,
                                            'subtitles_url', e.subtitles_url
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
                ts.movie_id = ?
            GROUP BY 
                ts.movie_id;
        `, [movie_id]);

        connection.release();

        return {
            success: true,
            msg: `Tv Series List by id`,
            details: res
        };
    } catch (error) {
        console.error('Error:', error.message);
        connection.release();
        
        if (error.sqlMessage) {
            return { success: false, msg: "Database Error", err: error.sqlMessage };
        } else {
            return { success: false, msg: "Database Error", err: error.message };
        }
    }
};

module.exports = {
    getSeriesSeasonsEpisodeById,
}