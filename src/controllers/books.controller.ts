import {Request, Response} from 'express';

class BooksController{

    public books(req: Request, res: Response){

        return res.render('books/index', {title: 'Books'});
    };

    public RenderFormBook(req: Request, res: Response){

        return res.render('books/form', {title: 'Add a book'});
    };


    
}



export const booksController = new BooksController();