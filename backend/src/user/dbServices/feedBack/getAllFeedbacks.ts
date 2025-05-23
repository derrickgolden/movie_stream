import { RowDataPacket } from "mysql2";
import { universalResponse } from "user/types/universalResponse";
const { pool } = require("../../../mysqlSetup");

export const getAllFeedbacks = async ( ): Promise<universalResponse> => {

    const connection: RowDataPacket = await pool.getConnection();
    try {
        var [res] = await connection.query(`
            SELECT 
                u.name, 
                u.phone, 
                u.apartment, 
                f.feedback_id, 
                f.subject, 
                f.status, 
                f.created_at, 
                COALESCE(
                    (
                        SELECT 
                            JSON_ARRAYAGG(
                                JSON_OBJECT(
                                    'message_id', fm.message_id,
                                    'sender_type', fm.sender_type,
                                    'message', fm.message,
                                    'sent_at', fm.sent_at
                                )
                            )
                        FROM feedback_messages fm
                        WHERE fm.feedback_id = f.feedback_id
                    ), 
                    JSON_ARRAY() -- Return empty array if no messages exist
                ) AS messages
            FROM feedback f
            JOIN users u ON f.user_id = u.id
            ORDER BY f.created_at DESC;
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
    getAllFeedbacks,
}