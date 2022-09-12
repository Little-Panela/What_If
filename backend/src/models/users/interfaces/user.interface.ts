import { IPoll } from "@polls/interfaces";

export interface IUser {
  id?: string;
  email: string;
  name: string;
  avatarUrl: string;
  createdPolls?: IPoll[] | string[];
  anwseredPolls?: IPoll[] | string[];
  pollsQuantity?: number
  createdAt?: Date
  updatedAt?: Date
}
