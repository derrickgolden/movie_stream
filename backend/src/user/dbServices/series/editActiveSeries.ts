import { RowDataPacket } from "mysql2";
import { universalResponse } from "user/types/universalResponse";
import { MovieDetails} from "../types";
const { pool } = require("../../../mysqlSetup");

export const updateActiveSeries = async (movieDetails: MovieDetails ): Promise<universalResponse> => {

    const {id, is_active} = movieDetails;
    
    const connection: RowDataPacket = await pool.getConnection();
    try {

        await connection.beginTransaction();

            const [res] = await connection.query(`
                UPDATE tv_series
                SET is_active = ?
                WHERE movie_id = ?
            `, [is_active, id]);
                
        await connection.commit();

        connection.release();

        return {
            success: true,
            msg: `Series Status Updated`,
            details: []
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
    updateActiveSeries
}