import express, {Request, Response} from 'express';
import { ModifiedReq, universalResponse } from 'user/types/universalResponse';
import { getLandingPageData } from '../dbServices/getLandingPageData';

const router = express.Router();

export interface LandingPageDataResponse {
    success: boolean;
        msg: string;
        details?: {movies: [], series: [], watching: [], newUploads: []};
        err?: string;
}
router.get('/get', async(req: ModifiedReq, res: Response) =>{
    const {id} = req.user
    try {
        const response:LandingPageDataResponse = await getLandingPageData(id);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response);
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

export default router;