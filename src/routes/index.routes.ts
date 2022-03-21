import {Router, Request} from 'express';
import {indexController} from '../controllers/index.controller';

const router = Router();


router.get('/', indexController.Index)








export default router;