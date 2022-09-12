import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './models/users/users.service';
import { UsersModule } from './models/users/users.module';
import Joi from 'joi';
import { GoogleAuthenticationController } from './authentication/google/google.controller';
import { GoogleAuthenticationService } from './authentication/google/google.service';
import { DatabasesModule } from './providers';
import { PollsModule } from './models/polls/polls.module';
import { QuestionsService } from './models/questions/questions.service';
import { QuestionsModule } from './models/questions/questions.module';
import { GoogleAuthenticationModule } from './authenticantion/google-authentication/google-authentication.module';
import { JwtModule } from './authentication/jwt/jwt.module';

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
    QuestionsModule,
    GoogleAuthenticationModule,
    JwtModule
  ],
  controllers: [GoogleAuthenticationController],
  providers: [GoogleAuthenticationService, UsersService, QuestionsService]
})
export class AppModule {}
