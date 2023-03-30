import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from '../Entitys/auth.entity';
import { AuthDto } from '../Dtos/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) private Auth: Repository<Auth>,
    @InjectRepository(AuthDto) private AuthDto: Repository<AuthDto>,
  ) {}
  async getUsers(): Promise<AuthDto[]> {
    return await this.Auth.find();
  }

  async findByEmail(email) {
    return await this.Auth.find({
      select: ['email', 'name', 'password'],
      where: [{ email: email }],
    });
  }
  async createUser(userDetails: AuthDto) {
    const newUser = this.AuthDto.create({
      ...userDetails,
    });
    return await this.AuthDto.save(newUser);
  }

  async registerUser(name: AuthDto) {
    const newUser = this.Auth.create({ ...name });
    return await this.Auth.save(newUser);
  }
}
