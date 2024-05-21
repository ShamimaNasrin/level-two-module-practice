import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  const student = req.body;

  // will call service function to send this data
  const result = await StudentServices.createStudentIntoDB(student);

  // send response
  res.status(200).json({
    success: true,
    message: 'Student created successfully',
    data: result,
  });
};

export const StudentControllers = {
  createStudent,
};
