import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {

    @Column
    userName: string;

    @Column
    name: string;

    @Column
    password: string;

}