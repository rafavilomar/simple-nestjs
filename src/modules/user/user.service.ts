import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm/repository/Repository';
import CreateUserDTO from './dto/create-user.dt';
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
    console.log(user);

    return await this.repository.save(user);
  }
}
export default UserService;
