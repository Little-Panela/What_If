import { IUser } from '@users/interfaces';
import { IQuestion } from '@questions/interfaces';

export interface IPoll {
  id?: string;
  creator: IUser;
  title: string;
  questions: IQuestion[];
  respondents: IUser[]
  createdAt?: Date;
  updatedAt?: Date;
}
