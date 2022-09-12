import { IPoll } from '../interfaces';

export class CreatePollDto implements IPoll {
  email: string;
  name: string;
  password: string;
}

export default CreatePollDto;
