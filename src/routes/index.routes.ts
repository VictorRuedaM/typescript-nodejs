import {Router} from 'express';

const router = Router();


router.get('/home', (req, res) => {

    res.send('Welcome to the home page!!!');
})






export default router;