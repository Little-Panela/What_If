import { IUser } from '@users/interfaces';
import { IQuestion } from '@questions/interfaces';

export interface IPoll {
  id?: string;
  creator: IUser | string;
  title: string;
  questions: IQuestion[] | string[];
  respondents?: IUser[] | string[];
  createdAt?: Date;
  updatedAt?: Date;
}
