import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { User } from './../user/models/user.entity';
import { RegisterDto } from './models/register.dto';
import { UserService } from './../user/user.service';
import { BadRequestException, Body, Controller, NotFoundException, Post, Req, Res, Get, UseInterceptors, ClassSerializerInterceptor, UseGuards } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { response, Response, Request } from 'express';

@UseInterceptors(ClassSerializerInterceptor)
@Controller()
export class AuthController {

    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private authService: AuthService
        ) {

    }
    
    @Post('register')
    async register(@Body() body: RegisterDto) {
        if (body.password !== body.password_confirm) {
            throw new BadRequestException('Password do not match');
        }

        const hased = await bcrypt.hash(body.password, 12);

        return this.userService.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            password: hased,
            role: {id: 1}
        });
    }

    @Post('login')
    async login (
        @Body('email') email: string,
        @Body('password') password: string,
        @Res({passthrough: true}) response: Response
    ) {
        const user = await this.userService.findOne({email});

        if(!user) {
            throw new NotFoundException('User Not Found');
        }

        if(!await bcrypt.compare(password, user.password)) {
            throw new BadRequestException('Invalid Credentials');
        }

        const jwt = await this.jwtService.signAsync({id: user.id});

        response.cookie('jwt', jwt,{httpOnly: true});

        return user;
    }
    @UseGuards(AuthGuard)
    @Get('user')
    async user(@Req() request: Request){
        
        const id = await this.authService.userId(request);

        return this.userService.findOne({id});
    }
    
    @UseGuards(AuthGuard)
    @Post('logout')
    async logout(@Res({passthrough: true}) response: Response) {
        response.clearCookie('jwt');

        return {
            message: 'Success'
        }
    }
}

