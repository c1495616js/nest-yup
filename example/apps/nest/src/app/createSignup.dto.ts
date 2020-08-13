import { UseSchema } from 'nestjs-yup';
import { authSchema } from '@example/schema';

@UseSchema(authSchema)
export class AuthCredentialsDto {
  username: string;

  password: string;
}
