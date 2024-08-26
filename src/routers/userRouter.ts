import express from 'express';
const router = express.Router();
import  { getUserById} from '../controllers/userControllers';
import { authication } from '../helpers/helper';
import { registor } from '../controllers/Authication';


router.get('/id',  getUserById);
router.post("/user",  registor);


export default router;