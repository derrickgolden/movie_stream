import express, {Request, Response} from 'express';
import { ModifiedReq, universalResponse } from 'user/types/universalResponse';
import { updateSubtitles } from '../dbServices/settings/updateSubtitle';
import { getSettings } from '../dbServices/settings/getSettings';

const router = express.Router();

router.patch('/subtitle', async(req: ModifiedReq, res: Response) =>{
    const {user} = req;

    try {
        const response:universalResponse = await updateSubtitles(user);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

router.get('/subtitle', async(req: ModifiedReq, res: Response) =>{
    const {user} = req;

    try {
        const response:universalResponse = await getSettings(user);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});


export default router;