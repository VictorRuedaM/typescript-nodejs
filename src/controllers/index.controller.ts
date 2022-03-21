import {Request, Response} from 'express';

class IndexController{

    Index(req: Request, res: Response){

        return res.render('index.hbs', {title: 'Welcome to the Books App'});
    };


    
}



export const indexController = new IndexController();

