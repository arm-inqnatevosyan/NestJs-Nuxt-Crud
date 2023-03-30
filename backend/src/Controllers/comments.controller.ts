import { Controller, Post, Body, Get } from '@nestjs/common';
import { CommentService } from '../Services/comments.service';
import { CommentDto } from '../Dtos/comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private Commentservice: CommentService) {}
  @Get()
  get() {
    return this.Commentservice.getUsers();
  }

  @Post()
  create(@Body() user: CommentDto) {
    return this.Commentservice.createUser(user);
  }
}
