import { IQuestion } from '@questions/interfaces';
import { IUser } from '@users/interfaces';
import { IPoll } from '@polls/interfaces';

export class CreatePollDto implements IPoll {
  creator: IUser;
  title: string;
  questions: IQuestion[];
  createdAt?: Date;
  updatedAt?: Date;
}

export default CreatePollDto;
