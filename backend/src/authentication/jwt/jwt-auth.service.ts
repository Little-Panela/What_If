
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './strategies/jwt-auth.strategy';

@Injectable()
export class JwtAuthService {
  constructor(private jwtService: JwtService) {}

  login(user: JwtPayload) {
    const payload = { username: user.username, email: user.email };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}