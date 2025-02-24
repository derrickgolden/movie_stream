"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { pool } = require("../../mysqlSetup");
const getUserDetailsByPhone = async (phone) => {
    const connection = await pool.getConnection();
    try {
        const [res] = await connection.query(`
        SELECT * from users 
        WHERE phone = ?;
        `, [phone]);
        connection.release();
        // console.log({res, phone})
        if (res.length) {
            return { success: true, details: res, msg: "Phone number registered" };
        }
        else {
            return { success: false, msg: "Phone number not registered" };
        }
    }
    catch (error) {
        console.log(error);
        connection.release();
        if (error.sqlMessage) {
            return { success: false, msg: error.sqlMessage };
        }
        else {
            console.error('Error:', error.message);
            return { success: false, msg: error.message };
        }
    }
};
module.exports = {
    getUserDetailsByPhone,
};
//# sourceMappingURL=users.js.map