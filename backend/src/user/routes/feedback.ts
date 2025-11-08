import express, { Response} from 'express';
import { ModifiedReq, universalResponse } from 'user/types/universalResponse';
import { getMovieRequests } from '../dbServices/movieRequests/getMovieRequest';
import { postFeedback } from '../dbServices/feedBack/postFeedback';
import { getAllFeedbacks } from '../dbServices/feedBack/getAllFeedbacks';

const router = express.Router();


router.post('/post', async(req: ModifiedReq, res: Response) =>{
    const {body, user} = req;
    try {
        const response:universalResponse = await postFeedback(body, user);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

router.get('/all', async(req: ModifiedReq, res: Response) =>{
    try {
        const response:universalResponse = await getAllFeedbacks();
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});


export default router;