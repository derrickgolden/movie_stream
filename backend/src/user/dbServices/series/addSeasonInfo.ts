import { RowDataPacket } from "mysql2";
import { universalResponse } from "user/types/universalResponse";
import { SeriesData} from "../types";
const { pool } = require("../../../mysqlSetup");

export const addSeasonInfo = async (seriesInfo: SeriesData ): Promise<universalResponse> => {
    const {seasonInfo, seriesDetails} = seriesInfo;
    const {order_no, season_name, trailer_url} = seasonInfo;
    const {id, movie_id} = seriesDetails;

    const connection: RowDataPacket = await pool.getConnection();
    try {

        await connection.beginTransaction();

            // Insert movies
            var [res] = await connection.query(`
                INSERT INTO season_info (season_order, season_name, movie_id, trailer_url)
                VALUES (?, ?, ?, ?)
            `, [order_no, season_name, movie_id, trailer_url]);

            // const movie_id = res.insertId;
                
        await connection.commit();

        connection.release();

        return {
            success: true,
            msg: `Season Info Added`,
            details: [{movie_id, id}]
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
    addSeasonInfo,
}