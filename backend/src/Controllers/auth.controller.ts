import { Controller, Post, Body, Get } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthService } from '../Services/auth.service';
import { LoginDto } from '../Dtos/login.dto';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { CreateDto } from 'src/Dtos/create.dto';

@Controller('auth')
export class Authcontroller {
  constructor(private auth: AuthService, private jwtService: JwtService) {}

  @Get()
  get() {
    return this.auth.getUsers();
  }
  @Post('register')
  async Register(@Body() user: CreateDto) {
    if (!user) {
      throw new UnauthorizedException();
    }
    user.password = await bcrypt.hash(user.password, 12);

    await this.auth.registerUser(user);

    delete user.password;

    return { message: 'success' };
  }

  @Post('login')
  async Login(@Body() req: LoginDto) {
    console.log('donee');
    const user = await this.auth.findByEmail(req.email);

    if (!user) {
      throw new UnauthorizedException('invalid credentials');
    }

    if (!(await bcrypt.compare(req.password, user[0].password))) {
      throw new UnauthorizedException('invalid credentials');
    }

    const jwt = await this.jwtService.signAsync({
      id: user[0].id,
      name: user[0].name,
    });
    return { message: 'success', token: jwt };
  }
}
