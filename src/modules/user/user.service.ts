import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import CreateUserDTO from './dto/create-user.dto';
import Users from './entity/Users';

@Injectable()
class UserService {
  constructor(
    @InjectRepository(Users)
    private repository: Repository<Users>,
  ) {}

  async create(newUser: CreateUserDTO): Promise<Users> {
    const user = new Users();
    user.username = newUser.username;
    user.password = newUser.password;

    return await this.repository.save(user);
  }

  async update(updatedUser: Users): Promise<Users> {
    const oldUser = await this.repository.findOneBy({ id: updatedUser.id });
    if (!oldUser) {
      throw new Error('User not found: ' + updatedUser.id);
    }
    return await this.repository.save(updatedUser);
  }
}
export default UserService;
