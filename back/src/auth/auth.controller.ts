import {Body, Controller, Get, Post} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() request:RegisterDtoRequest) {
    return this.authService.register(request);
  }

  @Post('login')
  login(@Body() request:LoginDtoRequest) {
    return this.authService.login(request);
  }
}