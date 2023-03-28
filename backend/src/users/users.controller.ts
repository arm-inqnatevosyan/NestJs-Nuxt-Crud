import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity/user.entity';
import { UserDto } from './Dto/user-dto';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  gets(@Param() params) {
    return this.service.getUsers(params.id);
  }

  @Get(':id')
  get(@Param() params, @Body() user: User) {
    return this.service.getUsersId(params.id, user);
  }

  @Post()
  create(@Body() user: User) {
    return this.service.createUser(user);
  }

  @Post()
  createUser(@Body() createUserDto: UserDto) {
    return this.service.createUser(createUserDto);
  }
  @Put(':id')
  update(@Param() params, @Body() user: User) {
    return this.service.updateUser(params.id, user);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.service.deleteUser(params.id);
  }
}
