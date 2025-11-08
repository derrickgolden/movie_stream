import { RowDataPacket } from "mysql2";
import { TokenUser, universalResponse } from "user/types/universalResponse";
import { RequestMovie} from "../types";
const { pool } = require("../../../mysqlSetup");

export const updateMovieRequestStatus = async (body: {status: string, movie_request_id: number} ): Promise<universalResponse> => {

    const { status, movie_request_id } = body;

    const connection: RowDataPacket = await pool.getConnection();
    try {

        await connection.beginTransaction();

            // Insert movies
            var [res] = await connection.query(`
                UPDATE movie_requests
                SET status = ?
                WHERE movie_request_id = ?
            `, [status, movie_request_id]);

            const affectedRows = res.affectedRows;
                
        await connection.commit();

        connection.release();
        if(affectedRows > 0){
            return {
                success: true,
                msg: `Status updated`,
                details: [{}]
            };
        }else{
            return {
                success: false,
                msg: `Status was not updated`,
                details: [{}]
            };
        }
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
    updateMovieRequestStatus,
}