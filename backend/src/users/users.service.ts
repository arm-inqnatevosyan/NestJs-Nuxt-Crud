import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async getUsers(user: User): Promise<User[]> {
    return await this.usersRepository.find({ relations: ['comments'] });
  }
  async getUsersId(_id: number, user: User): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['email', 'name', 'password'],
      where: [{ id: _id }],
    });
  }

  async createUser(userDetails) {
    const newUser = this.usersRepository.create({
      ...userDetails,
    });
    return await this.usersRepository.save(newUser);
  }

  async updateUser(id: number, UserDetails: User) {
    return await this.usersRepository.update({ id }, { ...UserDetails });
  }

  async deleteUser(user: User) {
    this.usersRepository.delete(user);
  }
}
