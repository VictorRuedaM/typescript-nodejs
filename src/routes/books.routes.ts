import {Router, Request} from 'express';
import {booksController} from '../controllers/books.controller';

const router = Router();


router.get('/', booksController.books);

router.get('/add', booksController.RenderFormBook);








export default router;