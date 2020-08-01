import { UseSchema } from 'nestjs-yup';
import { authSchema } from 'custom_modules';

@UseSchema(authSchema)
export class AuthCredentialsDto {
  username: string;

  password: string;
}
