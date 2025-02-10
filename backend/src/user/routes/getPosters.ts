import express, {Request, Response} from 'express';
import { universalResponse } from 'user/types/universalResponse';
import { getSeriesPosters } from '../dbServices/series/getPosters';

const router = express.Router();


router.get('/get', async(req: Request, res: Response) =>{

    try {
        const response:universalResponse = await getSeriesPosters();
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response);
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

export default router;