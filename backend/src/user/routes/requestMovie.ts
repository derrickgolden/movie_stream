import express, {Request, Response} from 'express';
import { addRequestMovie } from '../dbServices/movieRequests/addRequestMovie';
import { ModifiedReq, universalResponse } from 'user/types/universalResponse';
import { getMovieRequests } from '../dbServices/movieRequests/getMovieRequest';
import { updateMovieRequestStatus } from '../dbServices/movieRequests/updateMovieRequestStatus';

const router = express.Router();


router.post('/movie-request', async(req: ModifiedReq, res: Response) =>{
    const {body, user} = req;
    try {
        const response:universalResponse = await addRequestMovie(body, user);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

router.patch('/movie-request-status', async(req: ModifiedReq, res: Response) =>{
    const {body} = req;
    try {
        const response:universalResponse = await updateMovieRequestStatus(body);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

router.get('/movie-requests', async(req: ModifiedReq, res: Response) =>{
    const {body, user} = req;
    try {
        const response:universalResponse = await getMovieRequests();
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});


export default router;