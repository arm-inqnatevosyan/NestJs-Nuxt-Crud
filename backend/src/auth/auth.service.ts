import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './auth.entity';
import { AuthDto } from './Dto/auth-dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) private usersRepository: Repository<Auth>,
    @InjectRepository(AuthDto) private usersRepositorys: Repository<AuthDto>,
  ) {}
  async getUsers(AuthDto): Promise<AuthDto[]> {
    return await this.usersRepository.find();
  }

  async findEmail(email) {
    return await this.usersRepository.find({
      select: ['email', 'name', 'password'],
      where: [{ email: email }],
    });
  }
  async createUser(userDetails) {
    const newUser = this.usersRepositorys.create({
      ...userDetails,
    });
    return await this.usersRepositorys.save(newUser);
  }

  async registerUser(name: AuthDto) {
    const newUser = this.usersRepository.create({ ...name });
    return await this.usersRepository.save(newUser);
  }
}
