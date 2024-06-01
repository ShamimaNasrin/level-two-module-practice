import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  // try {
  const { password, student: studentData } = req.body;

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
