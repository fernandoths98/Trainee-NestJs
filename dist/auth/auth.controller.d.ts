import { User } from './../user/models/user.entity';
import { RegisterDto } from './models/register.dto';
import { UserService } from './../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
export declare class AuthController {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(body: RegisterDto): Promise<User>;
    login(email: string, password: string, response: Response): Promise<User>;
    user(request: Request): Promise<User>;
    logout(response: Response): Promise<{
        message: string;
    }>;
}
