import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './models/users/users.service';
import { UsersModule } from './models/users/users.module';
import Joi from 'joi';
import { GoogleAuthenticationController } from './authentication/google-authentication/google-authentication.controller';
import { GoogleAuthenticationService } from './authentication/google-authentication/google-authentication.service';
import { DatabasesModule } from './providers';
import { PollsModule } from './models/polls/polls.module';
import { QuestionsService } from './models/questions/questions.service';
import { QuestionsModule } from './models/questions/questions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        GOOGLE_AUTH_CLIENT_ID: Joi.string().required(),
        GOOGLE_AUTH_CLIENT_SECRET: Joi.string().required()
      })
    }),
    DatabasesModule,
    UsersModule,
    PollsModule,
    QuestionsModule
  ],
  controllers: [GoogleAuthenticationController],
  providers: [GoogleAuthenticationService, UsersService, QuestionsService]
})
export class AppModule {}
