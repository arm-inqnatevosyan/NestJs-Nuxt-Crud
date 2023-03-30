import { Module } from '@nestjs/common';
import { CommentService } from '../Services/comments.service';
import { CommentsController } from '../Controllers/comments.controller';
import { Comments } from 'src/Entitys/comments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../Entitys/user.entity';

@Module({
  providers: [CommentService],
  controllers: [CommentsController],
  imports: [TypeOrmModule.forFeature([Comments, User])],
})
export class CommentsModule {}
