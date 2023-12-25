import {
    BadRequestException,
    ConflictException,
    ForbiddenException,
    Injectable,
    NotFoundException
} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "../users/user.entity";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User) private userModel: typeof User,
        private jwtService: JwtService
        ) {
    }
    async register(request: RegisterDtoRequest) {
        const user = await this.userModel.findOne({where: {userName: request.userName}});

        if (user) {
            throw new ConflictException('User already exists');
        }

        const password = await bcrypt.hash(request.password, 10);
        const createdUser=await this.userModel.create({...request, password});
        return this.getToken(createdUser);
    }

    private getToken(createdUser: User) {
        const payload = {userName: createdUser.userName, id: createdUser.id};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async login(request: LoginDtoRequest) {
        const user = await this.userModel.findOne({where: {userName: request.userName}});
        if (!user) {
            throw new NotFoundException('User not found');
        }

        const isMatch = await bcrypt.compare(request.password, user.password);
        if (!isMatch) {
            throw new BadRequestException('Wrong password');
        }

        return this.getToken(user);
    }
}