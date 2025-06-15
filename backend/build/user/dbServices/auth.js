"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = require('bcryptjs');
const { pool } = require("../../mysqlSetup");
const signupUser = async (signupDetails) => {
    var { account, account2, apartment, email, expiry, house_number, ip, location, mac, name, hash, phone, edit, id } = signupDetails;
    const connection = await pool.getConnection();
    try {
        if (edit) {
            const [conflictUsers] = await connection.query(`SELECT id, phone, mac FROM users WHERE (phone = ? OR mac = ?) AND id != ?`, [phone, mac, id]);
            if (conflictUsers.length > 0) {
                const isPhoneTaken = conflictUsers.some((u) => u.phone === phone);
                const isMacTaken = conflictUsers.some((u) => u.mac === mac);
                if (isPhoneTaken) {
                    return { success: false, rejectInput: "phone", msg: "Phone already registered by another user" };
                }
                if (isMacTaken) {
                    return { success: false, rejectInput: "mac", msg: "MAC address already registered by another user" };
                }
            }
            const [updateUser] = await connection.query(`UPDATE users SET
                account = ?, account2 = ?, phone = ?, apartment = ?, email = ?,
                expiry = ?, house_number = ?, ip = ?, location = ?, mac = ?, name = ?, password = ?
                WHERE id = ?`, [account, account2, phone, apartment, email, expiry, house_number, ip, location, mac, name, hash, id]);
            connection.release();
            if (updateUser.affectedRows === 1) {
                return {
                    success: true,
                    msg: "User updated successfully",
                    details: [{ name, phone, account, account2, apartment }]
                };
            }
            else {
                return { success: false, msg: "No changes were made or user not found" };
            }
        }
        else {
            // Check if the user already exists
            const [existingUser] = await connection.query(`SELECT * FROM users WHERE phone = ? OR mac = ?`, [phone, mac]);
            if (existingUser.length > 0) {
                const isPhoneTaken = existingUser.some((user) => user.phone === phone);
                const isMacTaken = existingUser.some((user) => user.mac === mac);
                if (isPhoneTaken) {
                    return { success: false, rejectInput: "phone", msg: "Phone already registered" };
                }
                if (isMacTaken) {
                    return { success: false, rejectInput: "mac", msg: "MAC address already registered" };
                }
            }
            // Insert user details
            var [insertUser] = await connection.query(`
                INSERT INTO users (account, account2, phone, apartment, email, expiry, house_number, ip, location, mac, name, password)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `, [account, account2, phone, apartment, email, expiry, house_number, ip, location, mac, name, hash]);
            connection.release();
            const userId = insertUser.insertId;
            return {
                success: true,
                admin_id: userId,
                msg: "User Registered",
                details: [{ name, phone, account, account2, apartment }]
            };
        }
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
        ;
    }
    ;
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
        ;
        connection.release();
        if (res.length === 1) {
            const { name, account, account2, phone, id, email, remember_me, password, mac } = res[0];
            return { userAvailable: true, passwordHash: password,
                details: [{ name, account, account2, phone, id, email, remember_me, prevelages, mac }]
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
const updateLogin = async (wrong_pass, phone, prevelages) => {
    const connection = await pool.getConnection();
    try {
        if (prevelages === "viewer") {
            var [res] = await connection.query(`
                UPDATE users
                SET last_login = NOW(), wrong_pass = ?
                WHERE phone =?
            `, [wrong_pass, phone]);
            // console.log(res) ss  
            connection.release();
            if (res.affectedRows > 0) {
                return { userAvailable: true, details: [{ prevelages }] };
            }
            else {
                return { userAvailable: false };
            }
        }
        else {
            return { userAvailable: true, details: [{ prevelages }] };
        }
        ;
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
const getCode = async (id, user_id) => {
    const connection = await pool.getConnection();
    try {
        var [res] = await connection.query(`
            SELECT * FROM reset_codes
            WHERE id = ? AND user_id = ?
        `, [id, user_id]);
        connection.release();
        if (res.length === 1) {
            return { userAvailable: true, reset_code: res[0].reset_code, details: res };
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
const resetPassword = async (password, phone) => {
    const connection = await pool.getConnection();
    try {
        const [res] = await connection.query(`
            UPDATE users 
            SET password = ?
            WHERE phone = ?;
        `, [password, phone]);
        connection.release();
        if (res.affectedRows === 1) {
            return { success: true, msg: "pasword update successful" };
        }
        else {
            return { success: false, msg: "password not updated, phone number maybe unavailable" };
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
const storeLinkToken = async (id, code) => {
    const connection = await pool.getConnection(); // Ensure you have a properly configured pool
    try {
        // Check if the user already has a reset code entry
        const [getRes] = await connection.query(`
            SELECT * FROM reset_codes
            WHERE user_id = ?
        `, [id]);
        let insertId = getRes[0]?.id || null;
        if (getRes.length) {
            // If record exists, update the code
            await connection.query(`
                UPDATE reset_codes
                SET reset_code = ?
                WHERE user_id = ?
            `, [code, id]);
        }
        else {
            // If no record exists, insert a new one
            const [res] = await connection.query(`
                INSERT INTO reset_codes (user_id, reset_code)
                VALUES (?, ?)
            `, [id, code]);
            insertId = res.insertId;
        }
        return {
            success: true,
            msg: "Code stored successfully",
            details: [{ id: insertId, user_id: id }]
        };
    }
    catch (error) {
        console.error("Error storing link token:", error);
        return {
            success: false,
            msg: error.sqlMessage || error.message
        };
    }
    finally {
        connection.release(); // Ensure connection is released in all cases
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
    updateLogin,
    signupUser,
    loginUser,
    getCode,
    resetPassword,
    storeLinkToken,
    getLinkToken,
};
//# sourceMappingURL=auth.js.map