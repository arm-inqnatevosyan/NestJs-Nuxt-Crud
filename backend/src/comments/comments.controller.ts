import { Controller, Post, Body, Get } from '@nestjs/common';
import { CommentService } from './comments.service';
import { CommentDto } from './Dto/comment-dto';

@Controller('comments')
export class CommentsController {
  constructor(private service2: CommentService) {}
  @Get()
  get() {
    return this.service2.getUsers();
  }

  @Post()
  create(@Body() user: CommentDto) {
    return this.service2.createUser(user);
  }
}
