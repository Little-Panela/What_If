import { IPoll } from '@polls/interfaces';
import { IAnwser } from '@questions/interfaces';

export interface IQuestion {
  id?: string;
  poll: IPoll;
  text: string;
  anwsers: IAnwser[];
  createdAt?: Date
  updatedAt?: Date
}
