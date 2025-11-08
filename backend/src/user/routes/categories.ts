import express, {Request, Response} from 'express';
import { getMoviesSeriesCategoriesList } from '../dbServices/getMoviesSeriesCategories';
import { ModifiedReq, universalResponse } from 'user/types/universalResponse';

const router = express.Router();

router.get('/get', async(req: ModifiedReq, res: Response) =>{
    const {id} = req.user;
    try {
        const response:universalResponse = await getMoviesSeriesCategoriesList(id);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response);
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

export default router;