export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};

// export type NewUser = { // we don't need to craete another type rather we can use the role, password and id from the TUser
//   role: string;
//   password: string;
//   id: string;
// };
