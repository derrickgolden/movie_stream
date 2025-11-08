import express, {Request, Response} from 'express';
import { ModifiedReq, universalResponse } from 'user/types/universalResponse';
import { postMovieProgress } from '../dbServices/watchProgress/postWatchProgress';

const router = express.Router();


router.post('/watch-progress', async(req: ModifiedReq, res: Response) =>{
    const {body, user} = req;
    try {
        const response:universalResponse = await postMovieProgress(body, user);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});


export default router;