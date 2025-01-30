import { Injectable } from '@nestjs/common';
import { UserDto } from '../../../shared/dtos/user';
import { UsersModel } from './models/user.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UsersModel)
    private userRepository: typeof UsersModel,
  ) {}

  async create(createUser: UserDto) {
    const testVar = await this.userRepository.create(createUser as any);
    console.log('TEST VAR IS ' + testVar)
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  //update(id: number, updateUserDto: UpdateUserDto) {
    //return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
