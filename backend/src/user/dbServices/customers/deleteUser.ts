import { ResultSetHeader } from "mysql2";
import { universalResponse } from "user/types/universalResponse";
const { pool } = require("../../../mysqlSetup");

export const deleteUser = async (user_id: string): Promise<universalResponse> => {
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();

        const [result]: [ResultSetHeader, any] = await connection.query(
            `DELETE FROM users WHERE id = ?`,
            [user_id]
        );

        await connection.commit();
        connection.release();

        if (result.affectedRows === 0) {
            return {
                success: false,
                msg: "User not found",
                details: []
            };
        }

        return {
            success: true,
            msg: "User deleted",
            details: []
        };
    } catch (error) {
        console.error("Error:", error.message);
        connection.release();
        return {
            success: false,
            msg: error.sqlMessage || "Error while deleting user",
            err: error.message
        };
    }
};

module.exports = { deleteUser };
