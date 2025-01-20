import { RowDataPacket } from "mysql2";
import { universalResponse } from "user/types/universalResponse";
const { pool } = require("../../../mysqlSetup");

export const getMovieRequests = async ( ): Promise<universalResponse> => {

    const connection: RowDataPacket = await pool.getConnection();
    try {
        var [res] = await connection.query(`
            SELECT 
                u.name, 
                u.phone, 
                u.apartment, 
                mr.movie_request_id, 
                mr.movie_name, 
                mr.movie_type, 
                mr.description, 
                mr.notify, 
                mr.status,
                mr.request_date
            FROM 
                movie_requests mr
            JOIN 
                users u 
            ON 
                mr.user_id = u.id
            ORDER BY 
                mr.request_date DESC;
        `, []);

        connection.release();

        return {
            success: true,
            msg: `Requsted Movies List`,
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
    getMovieRequests,
}