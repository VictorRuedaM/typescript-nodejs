"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const colors_1 = __importDefault(require("colors"));
//Initializations
const app = (0, express_1.default)();
//Settings
const PORT = process.env.PORT || 3001;
//Middlewares
//Routes
//Static files
//Start server
const main = () => {
    app.listen(PORT, () => {
        console.log(colors_1.default.black.bgCyan(`-->> Server is running on port: ${PORT} `));
    });
};
main();
