import { NextFunction, RequestHandler, Response, Request } from 'express';

// this higher order function will receive an async func(which type is RequestHandler) as parameter and if there is an error it will handle it in the catch block otherwise it will resolve the promise. and we have to return the result inside a function
// with the help of RequestHandler we dont have to define req, res and next params type
const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

export default catchAsync;
