import {Controller, Get, Param, UseGuards} from '@nestjs/common';
import {UsersService} from './users.service';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.usersService.getAll();
    }

    // @UseGuards(JwtAuthGuard)
    @Get(":id")
    getById(@Param('id') id: string) {
        return this.usersService.getById(+id);
    }


}