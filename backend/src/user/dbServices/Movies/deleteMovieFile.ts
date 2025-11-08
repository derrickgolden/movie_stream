import { RowDataPacket } from "mysql2";
import { universalResponse } from "user/types/universalResponse";
const { pool } = require("../../../mysqlSetup");

export const deleteMovie = async ( id: string, type: string): Promise<universalResponse> => {

    const connection: RowDataPacket = await pool.getConnection();
    try {
        switch (type) {
            case "movie":
                var [res] = await connection.query(`
                    DELETE FROM movies
                    WHERE movie_id = ?
                `, [id]);
                break;

            case "episode":
                var [res] = await connection.query(`
                    DELETE FROM episodes
                    WHERE episode_id = ?
                `, [id]);
                break;

            case "season":
                var [res] = await connection.query(`
                    DELETE FROM season_info
                    WHERE season_id = ?
                `, [id]);
                break;
                
            case "series":
                var [res] = await connection.query(`
                    DELETE FROM tv_series
                    WHERE movie_id = ?
                `, [id]);
                break;
        
            default:
                break;
        }

        connection.release();

        const {affectedRows} = res;
        if(affectedRows > 0){
            return {
                success: true,
                msg: `${type} deleted successfully`,
                details: res
            };
        }else{
            return {
                success: false,
                msg: `Oops, ${type} not deleted`,
                details: res
            };
        }
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
    deleteMovie,
}