import { IQuestion } from "@questions/interfaces";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateQuestionDto implements IQuestion {
  @IsUUID()
  poll: string;

  @IsString()
  @IsNotEmpty()
  text: string;
}

export default CreateQuestionDto;
