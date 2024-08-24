import express from 'express';
const router = express.Router();
import  { getUserById} from '../controllers/userControllers';


router.get('/id', getUserById);


export default router;