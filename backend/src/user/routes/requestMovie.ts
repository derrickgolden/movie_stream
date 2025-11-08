import express, {Request, Response} from 'express';
import { addRequestMovie } from '../dbServices/movieRequests/addRequestMovie';
import { ModifiedReq, universalResponse } from 'user/types/universalResponse';
import { getMovieRequests } from '../dbServices/movieRequests/getMovieRequest';
import { updateMovieRequestStatus } from '../dbServices/movieRequests/updateMovieRequestStatus';
import { sendSMS } from '../controllers/auth/sendText';

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
    const {status, row, message} = body;
    const {phone, movie_request_id} = row;
   
    try {
        
        const sendPhone = "+" + phone;
        
        sendSMS([sendPhone], message).then(async(data) =>{
            if(data.success){
                const response:universalResponse = await updateMovieRequestStatus({status, movie_request_id});
                response.success ?
                    res.status(200).json(response):
                    res.status(302).json(response)
            }else{
                    res.status(302).json(data)
                } 
        });
    }
        
    catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

router.get('/movie-requests', async(req: ModifiedReq, res: Response) =>{
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