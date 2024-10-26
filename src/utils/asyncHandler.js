//this is a higher order function that take requestHandler function as input



const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

/*
The asyncHandler function takes a requestHandler function as its argument.
It returns a new function that takes the standard Express.js request handler arguments: req, res, and next.
Inside this new function, Promise.resolve() is used to ensure that the requestHandler function is executed as a promise, even if it doesn't return a promise explicitly.
The .catch() method is used to catch any errors that may occur during the execution of the requestHandler function.
If an error occurs, the next() function is called with the error as its argument, passing the error to the next error-handling middleware in the Express.js chain.
Purpose and Benefits
The purpose of this code is to simplify error handling for asynchronous request handlers in Express.js. By wrapping the request handler function with asyncHandler, you can ensure that any errors that occur during its execution are caught and passed to the next error-handling middleware.

This approach has several benefits:

It eliminates the need to write try-catch blocks in every asynchronous request handler function.
It ensures that errors are handled consistently throughout the application.
It makes it easier to write robust and error-free code.
*/
