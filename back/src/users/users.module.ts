import {forwardRef, Module} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import {User} from "./user.entity";
import {AuthModule} from "../auth/auth.module";

const UserRepository=SequelizeModule.forFeature([User]);
@Module({
  imports: [
      UserRepository,
    forwardRef(()=>AuthModule),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UserRepository],
})
export class UsersModule {}