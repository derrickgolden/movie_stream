import express, {Request, Response} from 'express';
import { ModifiedReq, universalResponse } from 'user/types/universalResponse';
import { getStatisticsDetails } from '../dbServices/watchProgress/getAllStatistics';

const router = express.Router();

router.get('/get', async(req: ModifiedReq, res: Response) =>{
    try {
        const response:universalResponse = await getStatisticsDetails();
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

export default router;