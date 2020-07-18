import * as yup from 'yup';
import { UseSchema } from 'nestjs-yup';

export const authSchema = yup.object({
  username: yup
    .string()
    .required()
    .min(4)
    .max(20),
  password: yup
    .string()
    .required()
    .min(8)
    .max(20)
    .matches(
      /((?=.*\d)|(?=.*\W))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      'password too weak',
    ),
});

@UseSchema(authSchema)
export class AuthCredentialsDto {
  username: string;

  password: string;
}
