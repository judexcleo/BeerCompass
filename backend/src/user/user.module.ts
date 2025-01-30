import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModel } from './models/user.model';
@Module({
  imports: [SequelizeModule.forFeature([UsersModel])],

  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
