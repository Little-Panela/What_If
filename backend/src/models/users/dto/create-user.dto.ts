import { IUser } from '@users/interfaces';
import { IsEmail, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateUserDto implements IUser {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUrl()
  @IsNotEmpty()
  avatarUrl: string
}

export default CreateUserDto;
