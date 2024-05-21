import { Request, Response } from 'express';
import { StudentServices } from './student.service';
// import studentValidationSchema from './student.joi.validation'; // Joi
import studentValidationSchema from './student.zod.validation'; // zod

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body; // using name alias for student
    // will call service function to send this data

    /* Joi start
    // validate data with Joi schema
    // const { error, value } = studentValidationSchema.validate(studentData);

    // const result = await StudentServices.createStudentIntoDB(value); // this value is the actual validate data so we should send this validated data to the db

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Joi something went wrong',
    //     error: error.details,
    //   });
    // }

    Joi end */

    // zod
    // data validation with zod
    const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await StudentServices.createStudentIntoDB(zodParsedData);

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
