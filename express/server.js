import express from "express";

//  use port for configuration the server, is mean the port that the server will listen on
const PORT = process.env.PORT || 3000;

/* create an instance of express, this will be our app
an instance is the result of calling the express function
basically, it is a function that we can use to create our server
*/
const app = express();
/*
syntax app:
 function(request, response, next) {
    app.handle(request, response, next);
    }
*/

/* define routes for the app.
 req is the 'request' object,
 res is the 'response' object.
 next is the 'next' middleware function.(optional)
 
 */

//  path = is the location of the resource on the server
/* get from path "/", this mean the client is
   requesting the root resource of the server
*/
app.get("/", (req, res) => {
  res.send("Hello World!"); // iqual response.send("Hello World!") sens is a method of the response object
});

/* use app.listen, listen is a method (function that lives on the app object)
 that will start the server, and it takes a port number and a callback function.
*/
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Show what is in the app: ${app}`);
});

// syntax: app.method(path, callback function)

/* get() = get request is asking for data from the server
   it is used to retrieve data from the server
   it is the most common type of HTTP request
   it is idempotent, meaning that multiple identical requests should have the same effect as a single request
   it is safe, meaning that it should not have any side effects on the server

   post() = post request is asking to send data to the server
   it is used to submit data to the server
   it is not idempotent, meaning that multiple identical requests may have different effects
   it is not safe, meaning that it may have side effects on the server

   put() = put request is asking to update data on the server
   it is used to update existing data on the server
   it is idempotent, meaning that multiple identical requests should have the same effect as a single request
   it is not safe, meaning that it may have side effects on the server

   delete() = delete request is asking to delete data on the server
   it is used to delete existing data on the server
   it is idempotent, meaning that multiple identical requests should have the same effect as a single request
   it is not safe, meaning that it may have side effects on the server

*/
