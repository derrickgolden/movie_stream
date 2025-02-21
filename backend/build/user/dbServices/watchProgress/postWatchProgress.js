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
        const queryCondition = is_series
            ? "user_id = ? AND movie_id = ?"
            : "user_id = ? AND movie_id = ?";
        const queryValues = is_series ? [id, movie_id] : [id, movie_id];
        // 1️⃣ Check if the record already exists
        const [existingRows] = await connection.query(`SELECT * FROM ${tableName} WHERE ${queryCondition}`, queryValues);
        if (existingRows.length > 0) {
            // 2️⃣ Update if exists
            await connection.query(`UPDATE ${tableName} 
                 SET progress = ?, completed = ? 
                 ${is_series ? ", episode_id = ?" : ""}
                 WHERE ${queryCondition}`, is_series
                ? [progress, isCompleted, episode_id, ...queryValues]
                : [progress, isCompleted, ...queryValues]);
        }
        else {
            // 3️⃣ Insert if it doesn't exist
            const columns = is_series
                ? "(user_id, movie_id, episode_id, progress, completed)"
                : "(user_id, movie_id, progress, completed)";
            const valuesPlaceholder = is_series ? "(?, ?, ?, ?, ?)" : "(?, ?, ?, ?)";
            await connection.query(`INSERT INTO ${tableName} ${columns} VALUES ${valuesPlaceholder}`, is_series
                ? [id, movie_id, episode_id, progress, isCompleted]
                : [id, movie_id, progress, isCompleted]);
        }
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