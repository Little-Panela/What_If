import { IUser } from '@users/interfaces';

export class CreateUserDto implements IUser {
  email: string;
  name: string;
  password: string;
}

export default CreateUserDto;
