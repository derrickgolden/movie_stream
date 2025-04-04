"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLandingPageData = void 0;
const { pool } = require("../../mysqlSetup");
const getLandingPageData = async (user_id) => {
    const connection = await pool.getConnection();
    try {
        const moviesQuery = `
            SELECT 
                m.movie_id AS video_id,
                m.title,
                m.description,
                m.release_date,
                m.is_series,
                m.backdrop_path,
                m.poster_path,
                COALESCE(mwp.progress, 0) AS progress, 
                COALESCE(mwp.completed, FALSE) AS completed,
                COALESCE(watch_counts.watch_count, 0) AS watch_count,
                mf.trailer_url
            FROM movies m
            LEFT JOIN movie_watch_progress mwp 
                ON m.movie_id = mwp.movie_id AND mwp.user_id = ?
            LEFT JOIN (
                SELECT movie_id, COUNT(*) AS watch_count
                FROM movie_watch_progress
                GROUP BY movie_id
            ) AS watch_counts ON m.movie_id = watch_counts.movie_id
            LEFT JOIN movie_files mf ON m.movie_id = mf.movie_id
            ORDER BY watch_counts.watch_count DESC, m.updated_at DESC;
        `;
        const seriesQuery = `
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
                        ) 
                        AND swp.user_id = ?
                        ORDER BY swp.updated_at DESC
                        LIMIT 1
                    ), 
                    JSON_OBJECT('episode_id', NULL, 'progress', 0, 'completed', FALSE)
                ) AS watch_progress,
                COALESCE(season_counts.total_seasons, 0) AS total_seasons,
                COALESCE(watch_counts.watch_count, 0) AS watch_count,
                MAX(trailers.trailer_url) AS trailer_url
            FROM tv_series ts
            LEFT JOIN (
                SELECT 
                    movie_id, 
                    COUNT(*) AS total_seasons
                FROM season_info
                GROUP BY movie_id
            ) AS season_counts ON ts.movie_id = season_counts.movie_id
            LEFT JOIN (
                SELECT 
                    si.movie_id,
                    COUNT(*) AS watch_count
                FROM series_watch_progress swp
                JOIN episodes e ON swp.episode_id = e.episode_id
                JOIN season_info si ON e.season_id = si.season_id
                GROUP BY si.movie_id
            ) AS watch_counts ON ts.movie_id = watch_counts.movie_id
            LEFT JOIN season_info trailers ON ts.movie_id = trailers.movie_id
            GROUP BY ts.movie_id
            ORDER BY watch_count DESC, ts.updated_at DESC;
        `;
        const watchingQuery = `
            SELECT * FROM (
                SELECT 
                    m.movie_id AS video_id,
                    m.title,
                    m.description,
                    m.release_date,
                    m.is_series,
                    m.backdrop_path,
                    m.poster_path,
                    mwp.progress,
                    mwp.completed,
                    NULL AS watch_progress,
                    NULL AS total_seasons,
                    mwp.updated_at,
                    mf.trailer_url
                FROM movies m
                JOIN movie_watch_progress mwp ON m.movie_id = mwp.movie_id
                LEFT JOIN movie_files mf ON m.movie_id = mf.movie_id AND mf.trailer_url IS NOT NULL
                WHERE mwp.user_id = ? AND mwp.completed = FALSE

                UNION ALL

                SELECT 
                    ts.movie_id AS video_id,
                    ts.title,
                    ts.description,
                    ts.release_date,
                    ts.is_series,
                    ts.backdrop_path,
                    ts.poster_path,
                    NULL AS progress,
                    NULL AS completed,
                    JSON_OBJECT(
                        'episode_id', swp.episode_id,
                        'progress', swp.progress,
                        'completed', swp.completed
                    ) AS watch_progress,
                    season_counts.total_seasons,
                    swp.updated_at,
                    trailers.trailer_url
                FROM tv_series ts
                JOIN series_watch_progress swp ON ts.movie_id IN (
                    SELECT si.movie_id FROM season_info si
                    JOIN episodes e ON si.season_id = e.season_id
                    WHERE e.episode_id = swp.episode_id
                )
                AND swp.user_id = ?
                JOIN (
                    SELECT 
                        movie_id, 
                        COUNT(*) AS total_seasons
                    FROM season_info
                    GROUP BY movie_id
                ) AS season_counts ON ts.movie_id = season_counts.movie_id
                LEFT JOIN (
                    SELECT 
                        movie_id,
                        MIN(trailer_url) AS trailer_url
                    FROM season_info
                    WHERE trailer_url IS NOT NULL
                    GROUP BY movie_id
                ) AS trailers ON ts.movie_id = trailers.movie_id
                WHERE swp.completed = FALSE
            ) AS watching_combined
            ORDER BY updated_at DESC;
        `;
        const latestUploadsQuery = `
    SELECT * FROM (
        SELECT 
            m.movie_id AS video_id,
            m.title,
            m.description,
            m.release_date,
            m.is_series,
            m.backdrop_path,
            m.poster_path,
            NULL AS total_seasons,
            mf.trailer_url,
            m.updated_at
        FROM movies m
        LEFT JOIN movie_files mf ON m.movie_id = mf.movie_id AND mf.trailer_url IS NOT NULL

        UNION ALL

        SELECT 
            ts.movie_id AS video_id,
            ts.title,
            ts.description,
            ts.release_date,
            ts.is_series,
            ts.backdrop_path,
            ts.poster_path,
            season_counts.total_seasons,
            trailers.trailer_url,
            ts.updated_at
        FROM tv_series ts
        JOIN (
            SELECT 
                movie_id, 
                COUNT(*) AS total_seasons
            FROM season_info
            GROUP BY movie_id
        ) AS season_counts ON ts.movie_id = season_counts.movie_id
        LEFT JOIN (
            SELECT 
                movie_id,
                MIN(trailer_url) AS trailer_url
            FROM season_info
            WHERE trailer_url IS NOT NULL
            GROUP BY movie_id
        ) AS trailers ON ts.movie_id = trailers.movie_id
    ) AS combined_uploads
    ORDER BY updated_at DESC
    LIMIT 20;
`;
        // Execute all queries in parallel
        const [movies] = await connection.query(moviesQuery, [user_id]);
        const [series] = await connection.query(seriesQuery, [user_id, user_id]);
        const [watching] = await connection.query(watchingQuery, [user_id, user_id]);
        const [newUploads] = await connection.query(latestUploadsQuery, [user_id, user_id]);
        connection.release();
        return {
            success: true,
            msg: `Movie Details`,
            details: {
                movies, // First element of array is result set
                series,
                watching,
                newUploads
            }
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
exports.getLandingPageData = getLandingPageData;
module.exports = {
    getLandingPageData: exports.getLandingPageData,
};
//# sourceMappingURL=getLandingPageData.js.map