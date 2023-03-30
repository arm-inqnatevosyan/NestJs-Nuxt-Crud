import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../Entitys/user.entity';
import { Repository } from 'typeorm';
import { Comments } from '../Entitys/comments.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comments) private usersRepository: Repository<Comments>,
    @InjectRepository(User) private UsersService: Repository<User>,
  ) {}
  async getUsers(): Promise<Comments[]> {
    return await this.usersRepository.find();
  }

  async createUser(userDetails) {
    const comments = new Comments();
    comments.name = userDetails.name;
    comments.user = await this.UsersService.findOne({
      where: { id: userDetails.userId },
    });
    return this.usersRepository.save(comments);
  }
}
