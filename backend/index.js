import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';

//Create an express app variable
const app = express();

//Middleware for parsing request body so I can test post request with Postman
app.use(express.json());


//Middleware for handling CORS policy ...Two options
//option one... is to allow all Origins with Default of cors(*)
// app.use(cors());
//option two... is to allow Custom Origins
app.use({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
});

//Now create a event listener to this app at that port.
// app.listen(PORT, () => {
//     console.log(`App is listening to port: ${PORT}`);
// });

//Now Create the route for "/" to connect with the server
app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send("Welcome to My BookStore")
});

// Express router Middleware
app.use('/books', booksRoute);

//import mongoose and connect it to the database pass the URL as a parameter.
// then use a structure to handle differnt scenarios for success and failure.

// Also embedd the .listen above only if when the database is connected..............

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to the DataBase')
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });