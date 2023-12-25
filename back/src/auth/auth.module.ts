import {forwardRef, Module} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {JwtModule, JwtService} from "@nestjs/jwt";
import {UsersModule} from "../users/users.module";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
      JwtModule.register({
          secret: 'secret',
          signOptions: { expiresIn: '1d' },
      }),
      forwardRef(()=>UsersModule),
  ],
    exports:[JwtModule]
})
export class AuthModule {}