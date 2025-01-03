import { RowDataPacket } from "mysql2";
import { universalResponse } from "user/types/universalResponse";
import { MovieFile} from "../types";
const { pool } = require("../../../mysqlSetup");

export const addMoviePath = async (movieFile: MovieFile ): Promise<universalResponse> => {

    const {id, title, label, order, url, movie_id, isEdit} = movieFile;

    const connection: RowDataPacket = await pool.getConnection();
    try {

        await connection.beginTransaction();

        if(isEdit){
            // update
            var [res] = await connection.query(`
                UPDATE movie_files
                SET label = ?, \`order\` = ?, url = ?
                WHERE movie_id = ?
            `, [label, order, url, movie_id]);            
        }else{
            // Insert movies
            var [insert_res] = await connection.query(`
                INSERT INTO movie_files (label, movie_id, \`order\`, url)
                VALUES (?, ?, ?, ?)
            `, [label, movie_id, order, url]);
            var insert_id = insert_res.insertID;
        }

        await connection.commit();

        connection.release();
        return {
            success: true,
            msg: !isEdit ?`Movie Uploaded`: "Movie Updated",
            details: [{movie_id, title, label, order, url, movie_file_id: insert_id || id}]
        };
    } catch (error) {
        console.error('Error:', error.message);
        connection.release();
        
        if (error.sqlMessage) {
            return { success: false, msg: error.sqlMessage };
        } else {
            return { success: false, msg: error.message };
        }
    }
};

module.exports = {
    addMoviePath,
}