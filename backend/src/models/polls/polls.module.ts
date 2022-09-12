import { Module } from '@nestjs/common';
import { PollsService } from './polls.service';

@Module({
  providers: [PollsService]
})
export class PollsModule {}
