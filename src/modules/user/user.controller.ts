import { Body, Controller, Post, Put } from '@nestjs/common';
import CreateUserDTO from './dto/create-user.dto';
import Users from './entity/Users';
import UserService from './user.service';

@Controller('user')
class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() newUser: CreateUserDTO): Promise<Users> {
    return this.userService.create(newUser);
  }

  @Put()
  updateUser(@Body() updatedUser: Users): Promise<Users> {
    return this.userService.update(updatedUser);
  }
}
export default UserController;
