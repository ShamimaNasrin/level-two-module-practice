import { NextFunction, Response, Request } from 'express';
import { AnyZodObject } from 'zod';

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // data validation with zod

      //if everything allright call next() ->
      schema.parseAsync({
        body: req.body,
      });
      next(); // send data to controller
    } catch (err) {
      next(err);
    }
  };
};

export default validateRequest;
