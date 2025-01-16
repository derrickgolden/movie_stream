import { DBServicesRes, LinkTokenRes, LoginMysqlRes, 
    LoginResponse, SignupResponse, User} from "user/type";
import { RowDataPacket } from 'mysql2/promise';
var bcrypt = require('bcryptjs');

const { pool } = require("../../mysqlSetup");

export interface StoreLinkTokenRes extends DBServicesRes{
    details?:[{
        link_tokens_id: number, id: number
    }]
}


const signupUser = async (signupDetails: User): Promise<SignupResponse> => {

    const phone = signupDetails.phone;

    const connection: RowDataPacket = await pool.getConnection();
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
        if( "phone" in signupDetails){
            var {account, account2, apartment, email, expiry, house_number, house_number, ip, location,
                mac, name, password, hash
            } = signupDetails

            var [insertUser] = await connection.query(`
                INSERT INTO users (account, account2, phone, apartment, email, expiry, house_number, ip, location, mac, name, password)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `, [account, account2, phone, apartment, email, expiry, house_number, ip, location, mac, name, hash]);
            
        }

        connection.release();

        const userId: number = insertUser.insertId;
        return {
            success: true,
            admin_id: userId,
            msg: "User Registered",
            details: [{ name, email, account, account2, apartment }]
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

const loginUser = async(email: string, phone: string, prevelages: "admin" | "viewer" ): Promise<LoginResponse> => {

    const connection: RowDataPacket = await pool.getConnection();
    try {

        if (prevelages === "admin"){
            var [res]: [Array<LoginMysqlRes>] = await connection.query(`
                SELECT * FROM admins
                WHERE email = ?
            `, [email]);
        }else if(prevelages === "viewer"){
            var [res]: [Array<LoginMysqlRes>] = await connection.query(`
                SELECT * FROM users
                WHERE phone = ?
            `, [phone]);
        }

        connection.release();

        if(res.length === 1){
            const {name, account, account2, phone, id, email, remember_me, password } = res[0]
                
            return {userAvailable: true, passwordHash: password,
                details: [{name, account, account2, phone, id, email, remember_me,  prevelages}]
            };
        }else{
            return {userAvailable: false}
        }
    } catch (error) {
        console.log(error)
        connection.release();

        if (error.sqlMessage) {
            return {userAvailable: false,
                res:{success: false,  msg: error.sqlMessage} };
          } else {
            return {userAvailable: false,
                res:{success: false, msg: error.message }};
        }
    }
}
const getCode = async(id: string, user_id: string, ) => {

    const connection: RowDataPacket = await pool.getConnection();
    try {

        var [res] = await connection.query(`
            SELECT * FROM reset_codes
            WHERE id = ? AND user_id = ?
        `, [id, user_id]);
        
        connection.release();

        if(res.length === 1){                
            return {userAvailable: true, reset_code: res[0].reset_code, details: res};
        }else{
            return {userAvailable: false}
        }
    } catch (error) {
        console.log(error)
        connection.release();

        if (error.sqlMessage) {
            return {userAvailable: false,
                res:{success: false,  msg: error.sqlMessage} };
          } else {
            return {userAvailable: false,
                res:{success: false, msg: error.message }};
        }
    }
}

const resetPassword = async(password:string, phone: string): Promise<DBServicesRes> =>{
                            
    const connection: RowDataPacket = await pool.getConnection();
    try {

        const [res]: [{affectedRows: number}] = await connection.query(`
            UPDATE users 
            SET password = ?
            WHERE phone = ?;
        `, [password, phone])

        connection.release();
        
        if(res.affectedRows === 1){
            return {success: true, msg: "pasword update successful"}
        }else{
            return {success: false, msg: "password not updated, phone number maybe unavailable"}
        }
    } catch (error) {
        console.log(error)
        connection.release();

        if (error.sqlMessage) {
            return { success: false, msg: error.sqlMessage };
          } else {
            console.error('Error:', error.message);
            return { success: false, msg: error.message };
          }
    }
}

const storeLinkToken = async (id: number, code: number) => {
    const connection = await pool.getConnection(); // Ensure you have a properly configured pool
    try {
        // Check if the user already has a reset code entry
        const [getRes]: [RowDataPacket[]] = await connection.query(`
            SELECT * FROM reset_codes
            WHERE user_id = ?
        `, [id]);

        let insertId = getRes[0].id || null;

        if (getRes.length) {
            // If record exists, update the code
            await connection.query(`
                UPDATE reset_codes
                SET reset_code = ?
                WHERE user_id = ?
            `, [code, id]);
        } else {
            // If no record exists, insert a new one
            const [res]: [{ insertId: number }] = await connection.query(`
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
    } catch (error: any) {
        console.error("Error storing link token:", error);

        return {
            success: false,
            msg: error.sqlMessage || error.message
        };
    } finally {
        connection.release(); // Ensure connection is released in all cases
    }
};

const getLinkToken = async(token: string ): Promise<LinkTokenRes> => {

    const connection: RowDataPacket = await pool.getConnection();
    try {

        const [res]:[Array<
            {user_id: number, email: string, token: string, create_time: Date}
            >] = await connection.query(`
        SELECT * FROM link_tokens
        WHERE token = ?
        `, [token]);

        connection.release();
        
        if(res.length === 1 && token === res[0].token){
            const {user_id, email, create_time} = res[0]

            const currentDateTime = create_time;
            currentDateTime.setHours(currentDateTime.getHours() + 3);
            if(currentDateTime < new Date()){
                return {success: false, msg: "Link Expired"}
            }   
            return {success: true, email, user_id, msg: ""};
        }else{
            return {success: false, msg: "Link Invalid"}
        }
    } catch (error) {
        console.log(error)
        connection.release();
        
        if (error.sqlMessage) {
            return {success: false,  msg: error.sqlMessage };
          } else {
            return {success: false, msg: error.message };
        }
    }
}

module.exports = {
    signupUser,
    loginUser,
    getCode,
    resetPassword,
    storeLinkToken,
    getLinkToken,
}