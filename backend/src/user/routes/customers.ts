import express, {Request, Response} from 'express';
import { universalResponse } from 'user/types/universalResponse';
import { deleteUser } from '../dbServices/customers/deleteUser';
import { editCustomerDetails } from '../dbServices/customers/editCustomerDetails';
import { getUserWatchStats } from '../dbServices/customers/getCustomers';
import { getClientWatchedMovies } from '../dbServices/users/getClientWatchedMovies';

const router = express.Router();


router.get('/delete-user/:user_id', async(req: Request, res: Response) =>{
    const {user_id} = req.params;

    try {
        const response:universalResponse = await deleteUser(user_id)
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response);
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

router.get('/get-list', async(req: Request, res: Response) =>{
    try {
        const response:universalResponse = await getUserWatchStats();
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response);
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

router.get('/watched-movies/:user_id', async(req: Request, res: Response) =>{
    const {user_id} = req.params;
    try {
        const response:universalResponse = await getClientWatchedMovies(user_id);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response);
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

router.patch('/edit-details', async(req: Request, res: Response) =>{
    const customerDetails = req.body;
    
    try {
        const response:universalResponse = await editCustomerDetails(customerDetails);
        response.success ? 
            res.status(200).json(response):
            res.status(302).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(302).json({success: false, msg: "sever side error", err: error.message})
    }
});

export default router;