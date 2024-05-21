import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body; // using name alias for student
    // will call service function to send this data
    const result = await StudentServices.createStudentIntoDB(studentData);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err, // schema te define kora error gula dekhabe
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
