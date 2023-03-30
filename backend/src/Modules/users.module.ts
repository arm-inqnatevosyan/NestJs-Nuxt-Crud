import { Module } from '@nestjs/common';
import { UsersService } from '../Services/users.service';
import { UsersController } from '../Controllers/users.controller';
import { User } from '../Entitys/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UsersModule {}
