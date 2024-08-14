import express from "express";
import { PORT } from "./config.js";

//Create an express app variable
const app = express();

//Now create a event listener to this app at that port.
app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});