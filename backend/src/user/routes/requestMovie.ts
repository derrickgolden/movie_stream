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
    const {status, row} = body;
    const {name, phone, movie_name, movie_request_id} = row;
    try {
        const response:universalResponse = await updateMovieRequestStatus({status, movie_request_id});
        if(response.success) {
            let text = "";
            status === "uploaded" ? 
                text = `Hi ${name}, your movie ${movie_name.toUpperCase()} is now available to enjoy at japtech.africa. Thank you for choosing JAPTECH!`:
            status === "inProgress" ?
                text = `Hi ${name}, your movie ${movie_name.toUpperCase()} is currently being processed and will soon be ready to enjoy at japtech.africa. Thank you for choosing JAPTECH!`:
            status === "cancelled" ?
                text = `Hi ${name}, we regret to inform you that your movie ${movie_name.toUpperCase()} has been canceled. Main reason for canceling is normally we were unable to find the movie. Thank you for choosing JAPTECH!`:
                null;

            const sendPhone = "+" + phone;

            sendSMS([sendPhone], text).then((data) =>{
                data.success? 
                    res.status(200).json(response):
                    res.status(200).json({success: true, msg: "Status updated but the client might have not received a notificaton"});
            });

        }else{
            res.status(302).json(response)
        }
        
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