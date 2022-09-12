
import { Module } from '@nestjs/common';
import { JwtAuthModule } from '../jwt/jwt-auth.module';
import { GoogleController } from './google.controller';
import { GoogleStrategy } from './strategies/google-auth.strategy';

@Module({
  imports: [JwtAuthModule],
  controllers: [GoogleController],
  providers: [GoogleStrategy],
})
export class GoogleOauthModule {}