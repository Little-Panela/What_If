import { IQuestion } from '@questions/interfaces';
import { IUser } from '@users/interfaces';
import { IPoll } from '@polls/interfaces';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePollDto implements IPoll {
  @IsNotEmpty()
  creator: IUser;

  @IsNotEmpty()
  @IsString()
  title: string;
}

export default CreatePollDto;
