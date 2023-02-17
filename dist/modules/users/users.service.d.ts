import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findAllUsers(): Promise<User[]>;
    findUserById(id: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
    updateUser(id: number, updateUserDto: Partial<UpdateUserDto>): Promise<import("typeorm").UpdateResult>;
    removeUser(id: number): Promise<import("typeorm").DeleteResult>;
}
