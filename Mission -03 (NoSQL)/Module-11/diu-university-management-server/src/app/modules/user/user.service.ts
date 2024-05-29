import config from '../../config';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { NewUser, TUser } from './user.interface';
import { UserModel } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const user: NewUser = {};

  //if password is not given , use deafult password
  user.password = password || (config.default_password as string);

  //set student role
  user.role = 'student';

  //set manually generated id
  user.id = '2030100001';

  // create a user
  const result = await UserModel.create(user);

  //create a student
  if (Object.keys(result).length) {
    // set id , _id as user
    studentData.id = result.id;
    studentData.user = result._id; //reference _id

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
