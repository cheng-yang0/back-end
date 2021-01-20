import { CreateUserDTO, EditUserDTO } from './user.dto';
import { User } from './user.interface';
import { UserService } from './user.service';
interface UserResponse<T = unknown> {
    code: number;
    data?: T;
    message: string;
}
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<UserResponse<User[]>>;
    findOne(_id: string): Promise<UserResponse<User>>;
    addOne(body: CreateUserDTO): Promise<UserResponse>;
    editOne(_id: string, body: EditUserDTO): Promise<UserResponse>;
    deleteOne(_id: string): Promise<UserResponse>;
}
export {};
