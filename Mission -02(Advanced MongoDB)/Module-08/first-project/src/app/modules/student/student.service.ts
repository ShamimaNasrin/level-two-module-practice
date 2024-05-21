import { StudentModel } from './student.model';
import { Student } from './student.interface';

// "StudentModel" model er opor query korbo
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
};
