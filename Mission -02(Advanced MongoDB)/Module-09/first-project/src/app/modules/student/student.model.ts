import { Schema, model, connect } from 'mongoose';
import validator from 'validator';
import config from '../../config';
import bcrypt from 'bcrypt';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'], // if the firstName is not specified it will throw this error message 'First Name is required'
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
    // validate: {
    //   // if the user provide "shaMiMA" this will throw this error message it has to be "Shamima"
    //   validator: function (value: string) {
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1); //Shamima
    //     return firstNameStr === value;
    //   },
    //   message: '{VALUE} is not in capitalize format',
    // },
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
    maxlength: [20, 'Name can not be more than 20 characters'],
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    //   message: '{VALUE} is not valid',
    // },
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, 'Father Name is required'],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Father occupation is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father Contact No is required'],
  },
  motherName: {
    type: String,
    required: [true, 'Mother Name is required'],
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother Contact No is required'],
  },
});

const localGuradianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  occupation: {
    type: String,
    required: [true, 'Occupation is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
});

// step 2: create schema
const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'ID is required'],
    unique: true,
  }, // we used unique so that we can't store duplicalte id in the db
  password: {
    type: String,
    required: [true, 'Password is required'],
    maxlength: [20, 'Password can not be more than 20 characters'],
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    //the previous method to declare an enum was wrong
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not a valid gender',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    // validate: {
    //   validator: (value: string) => validator.isEmail(value),
    //   message: '{VALUE} is not a valid email',
    // },
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group',
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required'],
  },
  localGuardian: {
    type: localGuradianSchema,
    required: [true, 'Local guardian information is required'],
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: '{VALUE} is not a valid status', // by using {VALUE} we can get the isActive value provided by the client side
    },
    default: 'active', // we can set a default value if there is no isActive value provided by the client side
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// there are 3 types of mongoose middlewares
// 1. Document middleware: pre save middleware/ hook : will work on create(), save()
studentSchema.pre('save', async function (next) {
  // console.log(this, 'pre hook : we will save  data');
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// post save middleware / hook
studentSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

//2. Query Middleware
studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

// step 3: create model
export const StudentModel = model<Student>('Student', studentSchema); // here we need to pass 2 parameters 1. name( it will be the name of the collection in mongDB), 2. the created schema
