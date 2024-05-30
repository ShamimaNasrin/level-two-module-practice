import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

// with the help of RequestHandler we dont have to define req, res and next params type4

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

const createStudent = catchAsync(async (req, res, next) => {
  // try {
  const { password, student: studentData } = req.body;

  // data validation with zod
  // const zodParsedData = studentValidationSchema.parse(studentData);

  const result = await UserServices.createStudentIntoDB(password, studentData);

  // send response
  // res.status(200).json({
  //   success: true,
  //   message: 'Student created successfully',
  //   data: result,
  // });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student created successfully',
    data: result,
  });
  // } catch (err) {
  //   // res.status(500).json({
  //   //   success: false,
  //   //   message: err.message || 'something went wrong',
  //   //   error: err,
  //   // });
  //   next(err);
  // }
});

export const UserControllers = {
  createStudent,
};
