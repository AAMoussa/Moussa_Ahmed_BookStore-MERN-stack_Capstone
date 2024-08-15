			Capstone - Per-Scholas August 15, 2024
			Book Store project
			MERN-STACK
			======================
   ===========================

* This basic Book store project is built using the MERN stack.


Steps
-----

- First, I created a BookStore-MERN-stack folder to have my capstone project
  files and folders, then opened it in VSCode.

- Within this directory, I created two folders, one for the backend and the 
  other is for the frontend for this project.

- I created a .gitignore file, then started with the "cd" backend by initializing
  my project with "npm init -y" to install package.json to my project.  
  
- Within the package.json file, I added the a type key with the value module so I 
  can be able to import and export.

- Also, to be ready, I also installed the nodemon and express.JS
  express will be my server framework and nodemon to start it automatically.
  "npm install express nodemon"

- Next, I added two scripts within the scripts object in the package.json, one 
  to start will run the project in node.js environment and dev will run it in development environment
  using "nodemon index.js".

- Now, I created the index.js file for the server-app and import express framework
  module then define the app variable for it, then make it listen to a port.
  I created a new file for ports named config.js to define and export the port number,
  then import it within the index.js file.

- Now, in the index.js file make a function to listen on this port with the callback function.
  To test the port we can "npm run dev" to test a console.log().

- (Picture1 show index.js) to show that that simple server is up and listening on the selected port!
----------------------------------------------------------------------------------

- Now, I will create my first Http route.

- Within the index.js file, I created the http get request method to get the resources 
  from the server. my first route will be for the '/' which is the first parameter in the
  method and the seconde parameter is the callback function that will handle the request.

- Within the callback function, will receive the req and res objects that we can handle both.

- (Picture 2) to test that the server is up and receiving and sending requests

-------------------------------------------------------------------------------
- For the DataBase...... MongoDB and Mongoose
-  Create the database BookStore and the collection name is Books.

- within my config.js I added the route to my Database collection route to a variable
  and exported.

- To work with MongoDB we need Mongoose library installed "npm install mongoose" then import it in index.js
  Then use the connect method of mongoose to connect to the URL with a then/catch structure to deal with different 
  scenarios.

- (PICTURE 3) Shows that the server App is up and connected to the database.
===========================================================================

((( Now Create a Book model with mongoose)))

- Mongoose allows us to interact with our mongoDB data easily with JavaScript commands.

- to create a model for the books, I created a models folder for all this project models.
  then bookModel.js file to host the schema and the model.

=============================================================================================================================================

((( Now save a new Book with mongoose)))

- To create my first book, I import the Book model into index.js

- I used the http request post method to create the new resource/book using the express app.  

- Because working with mongoose is an asynchronous process I used the async keyword for the callback function
  and the try/catch block for handling success and failure.

- Within the try part, I used some validation for the input received from the request.body

- if not received data response with the status code and send message to the...

- 

- 

- Now, lets test it with 'npm run dev' but with the post method, we cannot use the browser
  I used the Postman- a good tool to work with APIs.

- After dealing with errors, i found out that the body didnot recognize the server, and had to work with 
  Middleware adjustments to my index.js.

- I added the Middleware for parsing the request body using the express.json()
  "app.use(express.json());

- (PICTURE 4, 5)now testing my post method we see that the record had been created posted and added into the database.

===========================================================================

((( Now Get all Books with mongoose)))

- I created a route to get all books from the database.

- used a "/books" route which is here used with the get http method.

- within the try block used the book.find passing an empty object to get a list of all the books on record and save it 
  on a books variable. return the status code and the list to the client UI.

- (PICTURE 6, 7)Now I'll test it with Postman to see if it works.

===========================================================================

((( Now Get one Book by id with mongoose)))

- I created a route to get a single book from the database by id.

- used a "/book/:id" with the route params and extract it

- within the try block used the book.findById passing the extracted id to get the one book and save it 
  on a book variable. return the status code and that book to the client UI.

- (PICTURE 8)Now I'll test it with Postman to see if it works.

===========================================================================

((( Now update a Book with mongoose)))

- I created a route to update a single book from the database by id.

- update will need us to:
 * request.params and request.body
 * and an id params to find the book in the database.
 * we need request.body to update it.

- used a "/book/:id" with the route params and extract it

- within the try block, first validate the body of the inputted request. 
  Then used the book.findByIdAndUpdate passing the extracted id params 
  and the request.body to get the one book and update and save it 
  on a book result variable. return the status code and message that book
  was updated successfully.

- (PICTURE 9, 10, 11) Now I'll test it with Postman to see if it works.

- (PICTURE 8)Now I'll test it with Postman to see if it works.

===========================================================================

((( Now Delete a Book By id with mongoose)))

- I created a route to update a single book from the database by id.

- To Delete a book I will just need its id.

- (PICTURE 13, 14) LIST ALL AVAILABLE BOOKS / DELETE THE FIRST ONE AND TEST IT.

===========================================================================

((( Now BETTER TO Refactor Node.js with express router)))

- Take advantage of express router.

- Moved all different routes to the booksModel.js and use the express router.

- With in the booksModel.js import express

-Define a variable to be the express router, then swap it for all app instances.

- and since we are using a Book model import it as well.

- then within index.js just import the booksRoute from "./routes/bookRoute.js"

-finally, we need a middleware for "/books" and pass a bookRoute to it.
 This means that "/books" Will be expressed with prefix of different kind of methods
 to be handeled by this middleware.

-(PICTURE 15, 16) so within the routes/bookRoute.js swap all the '/books' for just '/' and test it in Postman.

===========================================================================

((( Now BETTER TO IMPLEMENT CORS IN Node.js and express.js)))

- To do that or to handle CORS errors install the package in the server console with
  "npm install cors" import it in index.js and use it as a Middleware.

- Just used the Allow custom origin to access, means that only clients with this custom origin can access my express server.
===========================================================================
===========================================================================
===========================================================================
Front-End
=========

((( Create the React app project, vite, Tailwind CSS )))

- Delete the front-end folder and cd.. to create the react app with 
  "npm create vite@latest"
  Create the project named frontend and cd to it and "npm install" then "npm run dev"

- go to "https://tailwindcss.com/" then get started, on Framework Gide choose vite, copy and run the 
  second command and follow along to set up the index.css file and the App.jsx file

- Now I have a rady to use React project with tailwindCSS

------------------------------------------------

((( SPA and add react router dom)))

- I will just creat a single page application and it doesn't need to be refreshed on page changing, 
  and since react doesn't have this with it, I installed the package
  "npm install react-router-dom" in the frontend directory.
	Then do some configuration for it:
		- in the main.jsx add (import { BrowserRouter } from 'react-router-dom')
			to have access to it throughout all the project.

- Go to App.jsx and import {Routes, Route} from 'react-router-dom' then return it in the App component
  as Routes component that has each route for our application.

- so within the src/pages create five files for different routes. then import them individually in App.jsx
  then add them to each one of the path attributes of the five routes.
 
  - so slash goes to the home component
  - /books/create goes to the CreateBook component
  - /books/details/:id goes to the ShowBook component
  - /books/edit/:id goes to the Editbook component
  - /books/delete/:id goes to the DeleteBook component

-  
========================================
------------------------------------------------

((( Show Books list in React))) 

<<<< I had to follow along with tutorials to learn more with tailwindcss>>>

Below are some steps I followed to get it in shape.

- install "npm axios react-icons"
  for sending http requests and react-icons for using the icons.

- first create a component for login state or loading state to display to the UI.

- Go to home and import the spinner module. and some extra packages.

- create a state for books and useEffect for using axios.get with the backend route for 
  books list.

- created a Backbutton reusable component. 
