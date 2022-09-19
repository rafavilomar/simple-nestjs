import { Body, Controller, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import CreateUserDTO from '../dto/create-user.dto';
import Users from '../entity/users.entity';
import UserService from '../service/user.service';

@ApiTags('User Module')
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
