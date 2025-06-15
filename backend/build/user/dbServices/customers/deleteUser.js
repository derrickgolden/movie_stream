"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const { pool } = require("../../../mysqlSetup");
const deleteUser = async (user_id) => {
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        const [result] = await connection.query(`DELETE FROM users WHERE id = ?`, [user_id]);
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
    }
    catch (error) {
        console.error("Error:", error.message);
        connection.release();
        return {
            success: false,
            msg: error.sqlMessage || "Error while deleting user",
            err: error.message
        };
    }
};
exports.deleteUser = deleteUser;
module.exports = { deleteUser: exports.deleteUser };
//# sourceMappingURL=deleteUser.js.map