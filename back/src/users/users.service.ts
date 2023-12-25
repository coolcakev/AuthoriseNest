import { Injectable } from '@nestjs/common';
import {User} from "./user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) {}

    getAll(): Promise<User[]> {
        return this.userModel.findAll();
    }
    create() {

    }

    getById(number: number) {
        return this.userModel.findOne({where: {id: number}});
    }
}