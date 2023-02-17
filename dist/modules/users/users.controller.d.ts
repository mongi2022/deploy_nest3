import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';
export declare class UsersController {
    private readonly usersService;
    private configService;
    constructor(usersService: UsersService, configService: ConfigService);
    create(createUserDto: CreateUserDto): Promise<import("./entity/user.entity").User>;
    findAll(): Promise<import("./entity/user.entity").User[]>;
    findById(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        refreshToken: string;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        name: string;
        email: string;
        refreshToken: string;
    }>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
