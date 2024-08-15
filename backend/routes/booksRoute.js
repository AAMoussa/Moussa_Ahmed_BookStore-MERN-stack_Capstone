import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

//Now Create the route for "/books" to create a new book record
router.post('/', async(request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear'
            })
        }
    //create a variable for the new book that will be created using the request body for all the fields
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        };
    //Call Book.create from the mongoose object model to create the passed newBook variable and save it in the book variable.
        const book = await Book.create(newBook);
    //Finally, if all good return success code with the book value.
        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Now Create the route for "/books" to get all Books from the db with the express server get request method
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});
        // return response.status(200).json(books)          BUT LETS SHAPE IT TO RETURN AN OBJECT WITH 2 VALUES.
        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Now Create the route for "/books/:id" to get ONE Books from the db with the express server get request method
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;      //extract the id from the route params

        const book = await Book.findById(id);
        // return response.status(200).json(books)          BUT LETS SHAPE IT TO RETURN AN OBJECT WITH 2 VALUES.
        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


// The route for updating a Book
// use app.put() to update a resource.
router.put('/:id', async (request, response) => {
    try {
        if (                                    //validate the inputted request
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear'
            });
        }

        const { id } = request.params;      //extract the id from the route params

        const result = await Book.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({message: 'Book Not found!'});       
        }
        return response.status(200).send({message: "Book Updated Successfully"});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for deleting a book
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;      //extract the id from the route params

        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({message: 'Book Not found!'});       
        }
        return response.status(200).send({message: "Book Deleted Successfully"});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// export this router as the default
export default router;