"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMovieProgress = void 0;
const { pool } = require("../../../mysqlSetup");
const postMovieProgress = async (body, user) => {
    const { movie_id, progress, is_series, episode_id, isCompleted } = body;
    const { id } = user;
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        const tableName = is_series ? "series_watch_progress" : "movie_watch_progress";
        const columns = is_series
            ? "(user_id, movie_id, episode_id, progress, completed)"
            : "(user_id, movie_id, progress, completed)";
        // Fix: Match values with placeholders
        const valuesPlaceholder = is_series ? "(?, ?, ?, ?, ?)" : "(?, ?, ? ,?)";
        const updateFields = is_series
            ? "progress = VALUES(progress), episode_id = VALUES(episode_id), completed = VALUES(completed)"
            : "progress = VALUES(progress), completed = VALUES(completed)";
        const values = is_series
            ? [id, movie_id, episode_id, progress, isCompleted]
            : [id, movie_id, progress, isCompleted];
        await connection.query(`INSERT INTO ${tableName} ${columns} 
             VALUES ${valuesPlaceholder} 
             ON DUPLICATE KEY UPDATE ${updateFields}`, values);
        await connection.commit();
        connection.release();
        return {
            success: true,
            msg: `Watch progress updated successfully`,
            details: []
        };
    }
    catch (error) {
        console.error("Error:", error.message);
        connection.release();
        return {
            success: false,
            msg: error.sqlMessage || error.message
        };
    }
};
exports.postMovieProgress = postMovieProgress;
module.exports = {
    postMovieProgress: exports.postMovieProgress,
};
//# sourceMappingURL=postWatchProgress.js.map