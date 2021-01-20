import { Model } from 'mongoose';
import { CreateUserDTO, EditUserDTO } from './user.dto';
import { User } from './user.interface';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findAll(): Promise<User[]>;
    findOne(_id: string): Promise<User>;
    addOne(body: CreateUserDTO): Promise<void>;
    editOne(_id: string, body: EditUserDTO): Promise<void>;
    deleteOne(_id: string): Promise<void>;
}
