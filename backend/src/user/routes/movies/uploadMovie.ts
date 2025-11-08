import express, {Request, Response} from 'express';
import { ModifiedReq, universalResponse } from 'user/types/universalResponse';
import { addMovieDetails, updateGenres } from '../../dbServices/Movies/addMovieDetails';
import { addMoviePath } from '../../dbServices/Movies/addMoviePath';
import { addSeasonInfo } from '../../dbServices/series/addSeasonInfo';
import { addEpisodeData } from '../../dbServices/series/addEpisodeData';
import { updateActiveSeries } from '../../dbServices/series/editActiveSeries';
import { getEpisode } from '../../controllers/getNextEpisodeAddName';
// import { convertToStereo } from '../../middlewares/convertAudio';

const router = express.Router();

router.post('/add/movie-details', async(req: ModifiedReq, res: Response) =>{
    const movieDetails = req.body;
    try {
        const response:universalResponse = await addMovieDetails(movieDetails);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

router.patch('/update-active-series', async(req: ModifiedReq, res: Response) =>{
    const activeDetails = req.body;
    try {
        const response:universalResponse = await updateActiveSeries(activeDetails);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

router.patch('/update-genres', async(req: ModifiedReq, res: Response) =>{
    const movieDetails = req.body;
    try {
        const response:universalResponse = await updateGenres(movieDetails);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

router.post('/add/movie-path', async(req: ModifiedReq, res: Response) =>{
    const movieDetails = req.body;
    try {
        const response:universalResponse = await addMoviePath(movieDetails);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

router.post('/add/season-info', async(req: ModifiedReq, res: Response) =>{
    const body = req.body;
    try {
        const response:universalResponse = await addSeasonInfo(body);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});
router.post('/add/episode-info', async(req: ModifiedReq, res: Response) =>{
    const body = req.body;

    try {
        const response:universalResponse = await addEpisodeData(body);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

router.post('/next-episode-addname', (req: Request, res: Response) => {
    const { baseurl, num } = req.body as { baseurl?: string; num?: string };

    if (!baseurl || !num) {
        return res.status(400).json({ success: false, error: 'Missing baseurl or num' });
    }

    const result = getEpisode(baseurl, num);

    if (result.success) {
        res.json(result);
    } else {
        res.status(500).json(result);
    }
});


export default router;