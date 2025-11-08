import { RowDataPacket } from "mysql2";
import { universalResponse } from "user/types/universalResponse";
const { pool } = require("../../../mysqlSetup");

export const getMovieByID = async (user_id: number, movie_id: string): Promise<universalResponse> => {
    const connection: RowDataPacket = await pool.getConnection();
    try {
        var [res] = await connection.query(
            `
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
                movie_files.subtitles_url,
                movie_files.credits_start,
                COALESCE(movie_watch_progress.progress, 0) AS progress, 
                COALESCE(movie_watch_progress.completed, FALSE) AS completed,
                (
                    SELECT COUNT(*) 
                    FROM movie_watch_progress 
                    WHERE movie_watch_progress.movie_id = movies.movie_id
                ) AS watch_count
            FROM 
                movies
            LEFT JOIN 
                movie_files ON movies.movie_id = movie_files.movie_id
            LEFT JOIN 
                movie_watch_progress ON movies.movie_id = movie_watch_progress.movie_id 
                AND movie_watch_progress.user_id = ?
            WHERE 
                movies.movie_id = ?  -- ✅ Filter only the specified movie_id
            ORDER BY 
                watch_count DESC, movies.created_at DESC;
            `,
            [user_id, movie_id] // ✅ Pass the movie_id as a parameter
        );

        connection.release();

        return {
            success: true,
            msg: `Movie Details`,
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
    getMovieByID,
};
