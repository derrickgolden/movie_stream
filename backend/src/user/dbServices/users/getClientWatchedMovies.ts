import { RowDataPacket } from "mysql2";
import { universalResponse } from "user/types/universalResponse";
const { pool } = require("../../../mysqlSetup");

export const getClientWatchedMovies = async (user_id: string): Promise<universalResponse> => {
    const connection: RowDataPacket = await pool.getConnection();
    try {
        const query = `
            -- Fetch watched movies
            SELECT 
                m.movie_id, 
                m.title, 
                m.is_series, 
                mwp.progress, 
                mwp.completed, 
                mwp.updated_at,
                NULL AS season_order, 
                NULL AS episode_order
            FROM movie_watch_progress mwp
            JOIN movies m ON mwp.movie_id = m.movie_id
            WHERE mwp.user_id = ?

            UNION ALL

            -- Fetch watched series with season and episode details
            SELECT 
                ts.movie_id, 
                ts.title, 
                1 AS is_series, 
                MAX(swp.progress) AS progress, 
                MAX(swp.completed) AS completed, 
                MAX(swp.updated_at) AS updated_at,
                si.season_order, 
                e.episode_order
            FROM series_watch_progress swp
            JOIN tv_series ts ON swp.movie_id = ts.movie_id
            JOIN episodes e ON swp.episode_id = e.episode_id
            JOIN season_info si ON e.season_id = si.season_id
            WHERE swp.user_id = ?
            GROUP BY ts.movie_id, ts.title, si.season_order, e.episode_order;
        `;

        // Provide user_id twice (one for each query in UNION ALL)
        const [res] = await connection.query(query, [user_id, user_id]);

        connection.release();

        return {
            success: true,
            msg: `Watched movies and series`,
            details: res
        };
    } catch (error) {
        console.error("Error:", error.message);
        connection.release();

        return {
            success: false,
            msg: "Database Error",
            err: error.sqlMessage || error.message
        };
    }
};

module.exports = {
    getClientWatchedMovies,
};
