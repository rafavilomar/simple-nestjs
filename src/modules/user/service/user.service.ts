import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import CreateUserDTO from '../dto/create-user.dto';
import Users from '../entity/Users';

@Injectable()
class UserService {
  constructor(
    @InjectRepository(Users)
    private repository: Repository<Users>,
  ) {}

  async create(newUser: CreateUserDTO): Promise<Users> {
    const USER = new Users();
    USER.username = newUser.username;
    USER.password = newUser.password;

    return await this.repository.save(USER);
  }

  async update(updatedUser: Users): Promise<Users> {
    const OLD_USER = await this.repository.findOneBy({ id: updatedUser.id });
    if (!OLD_USER) {
      throw new Error('User not found: ' + updatedUser.id);
    }
    return await this.repository.save(updatedUser);
  }

  async findById(id: number): Promise<Users | null> {
    return await this.repository.findOneBy({ id });
  }
}
export default UserService;
