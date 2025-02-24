const { pool } = require("../../mysqlSetup");
import { RowDataPacket } from 'mysql2/promise';
import { DBServicesRes } from 'user/type';

export interface UserDetailsRes extends DBServicesRes{
    details?: Array<{}>
}

const getUserDetailsByPhone = async( phone: string ): Promise<UserDetailsRes> =>{

    const connection: RowDataPacket = await pool.getConnection();
    try {

        const [res]: [Array<{}>] = await connection.query(`
        SELECT * from users 
        WHERE phone = ?;
        `, [phone])

        connection.release();
// console.log({res, phone})
        if(res.length){
            return {success: true, details: res, msg: "Phone number registered"}
        }else{
            return {success: false, msg: "Phone number not registered"}
        }
    } catch (error) {
        console.log(error);
        connection.release();

        if (error.sqlMessage) {
            return { success: false, msg: error.sqlMessage };
          } else {
            console.error('Error:', error.message);
            return { success: false, msg: error.message };
          }
    }
}

module.exports ={
    getUserDetailsByPhone,
}