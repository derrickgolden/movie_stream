"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRequestMovie = void 0;
const { pool } = require("../../../mysqlSetup");
const addRequestMovie = async (body, user) => {
    const { description, movieName, movieType, notify } = body;
    const { id } = user;
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        // Insert movies
        var [res] = await connection.query(`
                INSERT INTO movie_requests
                (user_id, description, movie_name, movie_type, notify)
                VALUES (?, ?, ?, ?, ?)
            `, [id, description, movieName, movieType, notify]);
        const insert_id = res.insertId;
        await connection.commit();
        connection.release();
        return {
            success: true,
            msg: `Movie request for ${movieName} has been sent`,
            details: [{ movieName }]
        };
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
exports.addRequestMovie = addRequestMovie;
module.exports = {
    addRequestMovie: exports.addRequestMovie,
};
//# sourceMappingURL=addRequestMovie.js.map