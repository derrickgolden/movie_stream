import { RowDataPacket } from "mysql2";
import { TokenUser, universalResponse } from "user/types/universalResponse";
import { FeedBackArg} from "../types";
const { pool } = require("../../../mysqlSetup");

export const postFeedback = async (body: FeedBackArg, user: TokenUser ): Promise<universalResponse> => {

    const { subject, sender_type, message } = body;
    const {id } = user;

    const connection: RowDataPacket = await pool.getConnection();
    try {

        await connection.beginTransaction();

            var [res] = await connection.query(`
                INSERT INTO feedback (user_id, subject) 
                VALUES (?, ?);
            `,[id, subject]);
            
            const insert_id = res.insertId;

            var [res] = await connection.query(`
                INSERT INTO feedback_messages (feedback_id, sender_type, message) 
                VALUES (?, ?, ?);
            `,[insert_id, sender_type, message]);
                
        await connection.commit();

        connection.release();

        return {
            success: true,
            msg: `Thank you for messaging us. Your feedback will be reviewed within 24hrs.`,
            details: [{subject, insert_id}]
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
    postFeedback,
}