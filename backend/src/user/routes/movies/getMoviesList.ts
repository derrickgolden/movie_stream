import express, {Request, Response} from 'express';
import { getMoviesList } from '../../dbServices/Movies/getMoviesList';
import { ModifiedReq, universalResponse } from '../../types/universalResponse';
import { getSeriesSeasonsEpisodeById } from '../../dbServices/series/getSeriesSeasonsById';
import { getSeriesDetails } from '../../dbServices/series/getSeriesDetails';

const router = express.Router();

router.get('/get-movies', async(req: ModifiedReq, res: Response) =>{
    const {id} = req.user
    try {
        const response:universalResponse = await getMoviesList(id);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

router.get('/get-seasons-episodes/:movie_id', async(req: Request, res: Response) =>{
    const {movie_id} = req.params;
    try {
        const response:universalResponse = await getSeriesSeasonsEpisodeById(movie_id);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

router.get('/get-series', async(req: ModifiedReq, res: Response) =>{
    const {id} = req.user
    try {
        const response:universalResponse = await getSeriesDetails(id);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

export default router;