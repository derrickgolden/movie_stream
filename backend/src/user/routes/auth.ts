import express, {Request, Response} from 'express';
import { TokenResponse } from '../controllers/auth/generateToken';
import {  GoogleUserProfile, LinkTokenRes, LoginResponse, 
    PersonDetails,  SignupResponse, User} from 'user/type';

var bcrypt = require('bcryptjs');
const router = express.Router();

const { loginUser, resetPassword, storeLinkToken, signupUser, getCode,
    updateLogin} =  require('../dbServices/auth');
// const { sendText } = require('../controllers/sendText');
// const { generateRandomVerificationCode } = require('../controllers/randomCode');
import { generateAuthToken } from '../controllers/auth/generateToken';
import { UserDetailsRes } from '../dbServices/users';
import { SendEmailRes } from 'user/controllers/auth/sendEmail';
import { StoreLinkTokenRes } from 'user/dbServices/auth';
import { authenticateToken } from '../middlewares/authenticateToken';
import { ModifiedReq, universalResponse } from 'user/types/universalResponse';
import { sendSMS } from '../../user/controllers/auth/sendText';
import { checkActivePPPoEUser } from '../middlewares/validateMacAddress';

const { getUserDetailsByPhone } = require('../dbServices/users');
const { sendEmail } = require('../controllers/auth/sendEmail');
const { hashCode } = require('../controllers/auth/genResetPassLink');

router.post('/signup', async (req: Request, res: Response): Promise<void> =>{
    const {auth_with} = req.body;
    
    try{
    if(auth_with === "app"){
        const { password }: User = req.body;
        const signupDetails = req.body;

        const hash = await bcrypt.hash(password, 10);
        var response:SignupResponse = await signupUser({...signupDetails, hash});

    }else if(auth_with === "google"){
        const { name, email, id, picture }: GoogleUserProfile = req.body;
        const {first_name, last_name} = separateName(name)

        var response:SignupResponse = await signupUser({first_name, last_name, 
            email, id, picture}, auth_with )    
    } 

        response.success ? 
            res.status(200).json(response) : 
            res.status(302).json(response)
    }catch(error){
        res.status(302).json({success: false, res: error.message})
    }
});

router.post('/login', async (req: Request, res: Response): Promise<void> =>{
    const { email, prevelages, phone, password, auth_with}: PersonDetails = req.body;

    const response: LoginResponse = await loginUser(email, phone, prevelages);
    const { passwordHash, userAvailable, details } = response;

    try {
        if(!userAvailable){
            res.status(200).send({success: false, msg: "Details not registered", details: response});
            return;
        }

        const { id, account, account2, phone, prevelages, mac } = details[0];

        if(prevelages === "viewer"){
            const client = await checkActivePPPoEUser(mac);
            if (!client) {
                res.status(403).json({
                    success: false,
                    msg: "You are not an active client of JAPTECH. Contact ISP.",
                    details: [],
                });
                return;
            }
        }

        // generate JWT token
        const expiresInDays: number = 60;
        const { token, exp_date }: TokenResponse = await generateAuthToken(
            id, account, account2, phone, mac, prevelages, expiresInDays
        );

        if(auth_with === "google"){
            res.status(200).send({success: true, token, msg: "User Found", details});
            return; 
        };

        const match: boolean = await bcrypt.compare(password, passwordHash);
        if(match || prevelages === "viewer") {
            const wrong_pass = false
            const resp:universalResponse = await updateLogin(wrong_pass, phone, prevelages );
            res.status(200).send({success: true, token, msg: "User Found", details});   
        }else{
            const wrong_pass = true;
            const response:universalResponse = await updateLogin(wrong_pass, phone, prevelages )
            res.status(200).send({success: false, msg: "Incorrect Password"});
        };
    } catch (error) {
        console.log(error);
        res.status(404).send({success: false, msg: error.message});
    };
});

router.get('/validate-token', authenticateToken, async (req: ModifiedReq, res: Response): Promise<void> =>{
    const {prevelages, phone, mac} = req.user;

    try {
        const client = await checkActivePPPoEUser(mac);

        if (!client) {
            res.status(403).json({
                success: false,
                msg: "You are not an active client of JAPTECH. Contact ISP.",
                details: [],
            });
            return;
        }

        const wrong_pass = false;
        const response:universalResponse = await updateLogin(wrong_pass, phone, prevelages );

        res.status(200).send({success: true, msg: "User Found and correct mac"}); 
    } catch (error) {
        console.log(error);
        res.status(404).send({success: false, msg: "Server side error"});
    };
});

router.patch('/submit-code', async (req: Request, res: Response): Promise<void> =>{
    const { id, user_id, code} = req.body;

    const response = await getCode(id, user_id);
    const { userAvailable, reset_code, updated_at } = response;
    // console.log({email, prevelages, phone, password, auth_with})
    try {
        if(!userAvailable){
            res.status(200).send({success: false, msg: "Something went wrong. Try to reset the password again", details: response});
            return;
        }

        const match: boolean = await bcrypt.compare(code, reset_code);
        if(match) {
            res.status(200).send({success: true, msg: "Change password", details: response});   
        }else{
            res.status(200).send({success: false, msg: "Invalid Code"});
        };
    } catch (error) {
        console.log(error);
        res.status(404).send({success: false, msg: error.message});
    };
});

router.patch('/change-pass', authenticateToken, async(req: ModifiedReq, res: Response) =>{
    const { newPassword, oldPassword } = req.body;
    const {phone} = req.user;

    try {
        const response: LoginResponse = await loginUser(phone);
        const { passwordHash } = response;
        
        const match: boolean = await bcrypt.compare(oldPassword, passwordHash);
        if(match) {
            const hash = await bcrypt.hash(newPassword, 10);
    
            const response = await resetPassword(hash, phone)
            return response.success ?
                res.status(200).send({success: true, 
                    msg: "Password changed, you are required to log in again"}) :
                res.status(400).send(response)   
        }else{
            res.status(200).send({success: false, msg: "Incorrect Old Password"});
        }

    } catch (error) {
        // console.log(error)
        res.status(404).send({success: false, err: error.message, msg: "Server side error"})
    }
});

router.patch('/reset-password', async(req: Request, res: Response) =>{
    const { password, phone }: PersonDetails = req.body;

    try {
        
            const hash = await bcrypt.hash(password, 10);
    
            const response = await resetPassword(hash, phone)
            return response.success ?
                res.status(200).send(response) :
                res.status(400).send(response)
        

    } catch (error) {
        console.log(error)
    }
});

router.post('/forgot-password', async(req: Request, res: Response): Promise<void> =>{
    const { phone }: PersonDetails = req.body;

    try {
        interface UserDetailsRes2 extends UserDetailsRes{
            details?: Array<{
                id: number;
                email: string;
                phone: string;
            }>;
        }

        const response: UserDetailsRes2 = await getUserDetailsByPhone(phone);

        if(response.success ){
            const {id,  phone} = response.details[0];
            const {code, hashedCode}: {code: string, hashedCode: string} = await hashCode();
            const storeCode: StoreLinkTokenRes= await storeLinkToken(id, hashedCode)

            if(storeCode.success){
                const p = "+" + phone;
                const msg = `Using the following code to reset JAP TECH movies password: ${code}`
                const resp: SendEmailRes  = await sendSMS([p], msg);
                resp.success ?
                    res.status(200).send({success: true, msg: "Code sent", details: storeCode.details}):
                    res.status(400).send(resp);
                    return;
            }else{
                res.status(400).send(storeCode);
                return;
            }
            }
        res.status(400).send(response)

    } catch (error) {
        console.log(error)
        res.status(400).send({success: false, msg: "serverside error", error: error.message})
    }
});

const separateName = (name: string) =>{
    const match = name.match(/^(\S+)\s+(\S+)$/);

    if (match) {
        const first_name = match[1];
        const last_name = match[2]; 
        return {first_name, last_name}
    } else {
        return {first_name: name, last_name: ""}
    }
}

export default router;