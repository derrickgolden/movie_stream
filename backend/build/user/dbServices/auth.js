"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = require('bcryptjs');
const { pool } = require("../../mysqlSetup");
const signupUser = async (signupDetails) => {
    const phone = signupDetails.phone;
    console.log(signupDetails);
    const connection = await pool.getConnection();
    try {
        // Check if the user already exists
        const [existingUser] = await connection.query(`
            SELECT * FROM users
            WHERE phone = ? 
        `, [phone]);
        if (existingUser.length > 0) {
            connection.release();
            return { success: true, rejectInput: "phone", msg: "Phone already registered" };
        }
        // Insert user details
        if ("phone" in signupDetails) {
            var { account, account2, apartment, email, expiry, house_number, house_number, ip, location, mac, name, password, hash } = signupDetails;
            var [insertUser] = await connection.query(`
                INSERT INTO users (account, account2, phone, apartment, email, expiry, house_number, ip, location, mac, name, password)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `, [account, account2, phone, apartment, email, expiry, house_number, ip, location, mac, name, hash]);
        }
        connection.release();
        const userId = insertUser.insertId;
        return {
            success: true,
            admin_id: userId,
            msg: "User Registered",
            details: [{ name, email, account, account2, apartment }]
        };
    }
    catch (error) {
        console.error('Error:', error.message);
        connection.release();
        if (error.sqlMessage) {
            return { success: false, msg: error.sqlMessage };
        }
        else {
            return { success: false, msg: error.message };
        }
    }
};
const loginUser = async (email, phone, prevelages) => {
    const connection = await pool.getConnection();
    try {
        if (prevelages === "admin") {
            var [res] = await connection.query(`
                SELECT * FROM admins
                WHERE email = ?
            `, [email]);
        }
        else if (prevelages === "viewer") {
            var [res] = await connection.query(`
                SELECT * FROM users
                WHERE phone = ?
            `, [phone]);
        }
        connection.release();
        if (res.length === 1) {
            const { name, account, account2, phone, id, email, remember_me, password } = res[0];
            return { userAvailable: true, passwordHash: password,
                details: [{ name, account, account2, phone, id, email, remember_me, prevelages }]
            };
        }
        else {
            return { userAvailable: false };
        }
    }
    catch (error) {
        console.log(error);
        connection.release();
        if (error.sqlMessage) {
            return { userAvailable: false,
                res: { success: false, msg: error.sqlMessage } };
        }
        else {
            return { userAvailable: false,
                res: { success: false, msg: error.message } };
        }
    }
};
const resetPassword = async (password, email) => {
    const connection = await pool.getConnection();
    try {
        const [res] = await connection.query(`
        UPDATE users 
        SET password = ?
        WHERE email = ?;
        `, [password, email]);
        connection.release();
        if (res.affectedRows === 1) {
            return { success: true, msg: "pasword update successful" };
        }
        else {
            return { success: false, msg: "password not updated, email maybe unavailable" };
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
const storeLinkToken = async (user_id, email, token) => {
    const connection = await pool.getConnection();
    try {
        const [res] = await connection.query(`
        INSERT INTO link_tokens (user_id, email, token)
        VALUES (?, ?, ?)
        `, [user_id, email, token,]);
        connection.release();
        return { success: true, msg: "",
            details: [{ link_tokens_id: res.insertId, user_id, email }]
        };
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
const getLinkToken = async (token) => {
    const connection = await pool.getConnection();
    try {
        const [res] = await connection.query(`
        SELECT * FROM link_tokens
        WHERE token = ?
        `, [token]);
        connection.release();
        if (res.length === 1 && token === res[0].token) {
            const { user_id, email, create_time } = res[0];
            const currentDateTime = create_time;
            currentDateTime.setHours(currentDateTime.getHours() + 3);
            if (currentDateTime < new Date()) {
                return { success: false, msg: "Link Expired" };
            }
            return { success: true, email, user_id, msg: "" };
        }
        else {
            return { success: false, msg: "Link Invalid" };
        }
    }
    catch (error) {
        console.log(error);
        connection.release();
        if (error.sqlMessage) {
            return { success: false, msg: error.sqlMessage };
        }
        else {
            return { success: false, msg: error.message };
        }
    }
};
module.exports = {
    signupUser,
    loginUser,
    // loginAdmin,
    resetPassword,
    storeLinkToken,
    getLinkToken,
};
//# sourceMappingURL=auth.js.map