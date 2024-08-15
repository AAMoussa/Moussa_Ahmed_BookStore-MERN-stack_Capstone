import mongoose from "mongoose";


// Using the schema method of mongoose and use it in the model
// Here is the book schema variable to have the objects of fields
const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        author: {
            type: String,
            require: true,
        },
        publishYear: {
            type: Number,
            require: true,
        }
    },
    {
        timestamps: true,
    }
);


// Book model with the bookSchema above used
export const Book = mongoose.model('Book', bookSchema);