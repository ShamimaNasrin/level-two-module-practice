import { z } from 'zod';

const userValidationSchema = z.object({
  // id: z.string(),
  // password: z
  //   .string()
  //   .max(20, { message: 'Password can not be more than 20 characters' }),
  // needsPasswordChange: z.boolean().optional().default(true),
  // role: z.enum(['admin', 'student', 'faculty']),
  // status: z.enum(['in-progress', 'blocked']).default('in-progress'),
  // isDeleted: z.boolean().optional().default(false),

  pasword: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password can not be more than 20 characters' })
    .optional(), // admin default password set korte pare abar nao pare
});

export const UserValidation = {
  userValidationSchema,
};
