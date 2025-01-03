
import express, {Request, Response} from 'express';
import { universalResponse } from '../../types/universalResponse';
import { deleteMovie } from '../../dbServices/Movies/deleteMovieFile';

const router = express.Router();
router.get('/delete-movie/:movie_id', async(req: Request, res: Response) =>{
    const {movie_id} = req.params;
    const type = "movie";
    try {
        const response:universalResponse = await deleteMovie(movie_id, type);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

router.get('/delete-episode/:episode_id', async(req: Request, res: Response) =>{
    const {episode_id} = req.params;
    const type = "episode"
    try {
        const response:universalResponse = await deleteMovie(episode_id, type);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});
router.get('/delete-season/:season_id', async(req: Request, res: Response) =>{
    const {season_id} = req.params;
    const type = "season"
    try {
        const response:universalResponse = await deleteMovie(season_id, type);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});
router.get('/delete-series/:movie_id', async(req: Request, res: Response) =>{
    const {movie_id} = req.params;
    const type = "series"
    try {
        const response:universalResponse = await deleteMovie(movie_id, type);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

export default router;