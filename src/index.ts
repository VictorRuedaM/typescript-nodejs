import express from 'express';
require('dotenv').config();
const helpers = require('./lib/helpers')
import colors from 'colors';
import {engine} from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import routes from './routes/index.routes';
import routesBooks from './routes/books.routes';


//Initializations
const app = express();

//Settings
const PORT = process.env.PORT || 3001;
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: helpers,
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));


//Routes
app.use('/', routes);
app.use('/books', routesBooks);

//Static files
app.use(express.static(path.join(__dirname, 'public')));


//Start server
const main = () => {

    app.listen(PORT, () => {
        console.log(colors.black.bgCyan(`-->> Server is running on port: ${PORT} `));
    })
};

main();