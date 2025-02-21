"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMoviePath = void 0;
const { pool } = require("../../../mysqlSetup");
const addMoviePath = async (movieFile) => {
    const { id, title, label, order, url, movie_id, isEdit, trailer_url, subtitles_url, credits_start } = movieFile;
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        if (isEdit) {
            // update
            var [res] = await connection.query(`
                UPDATE movie_files
                SET label = ?, \`order\` = ?, url = ?, trailer_url = ?, subtitles_url = ?, credits_start = ?
                WHERE movie_id = ?
            `, [label, order, url, trailer_url, subtitles_url, credits_start, movie_id]);
            var affectRows = res.affectRows;
        }
        else {
            // Insert movies
            var [insert_res] = await connection.query(`
                INSERT INTO movie_files (label, movie_id, \`order\`, url, trailer_url, subtitles_url, credits_start)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `, [label, movie_id, order, url, trailer_url, subtitles_url, credits_start]);
            var insert_id = insert_res.insertID;
        }
        await connection.commit();
        connection.release();
        if (!isEdit) {
            return {
                success: true,
                msg: !isEdit ? `Movie Uploaded` : "Movie Updated",
                details: [{ movie_id, title, label, order, url, movie_file_id: insert_id || id, trailer_url, subtitles_url }]
            };
        }
        else {
            if (res.affectedRows > 0) {
                return {
                    success: true,
                    msg: !isEdit ? `Movie Uploaded` : "Movie Updated",
                    details: [{ movie_id, title, label, order, url, movie_file_id: insert_id || id, trailer_url, subtitles_url }]
                };
            }
            else {
                return {
                    success: false,
                    msg: "Movie Updated was Unsuccessful!!!",
                    details: [{ movie_id, title, label, order, url, movie_file_id: insert_id || id, trailer_url, subtitles_url }]
                };
            }
        }
    }
    catch (error) {
        console.error('Error:', error.message);
        connection.release();
        if (error.sqlMessage) {
            return { success: false, msg: error.sqlMessage };
        }
        else {
            return { success: false, msg: error.message };
        }
    }
};
exports.addMoviePath = addMoviePath;
module.exports = {
    addMoviePath: exports.addMoviePath,
};
//# sourceMappingURL=addMoviePath.js.map