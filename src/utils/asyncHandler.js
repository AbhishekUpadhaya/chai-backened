//this is a higher order function that take function as input
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (err) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

//OR

const asyncHandler = (requestHandler) => {
 return (req, res, next) => {
    Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err));
  };
};

export { asyncHandler };
