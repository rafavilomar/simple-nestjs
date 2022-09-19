import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import PaymentOptionController from './controller/payment-option.controller';
import UserController from './controller/user.controller';
import PaymentOption from './entity/payment-option.entity';
import Users from './entity/users.entity';
import PaymentOptionService from './service/payment-option.service';
import UserService from './service/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users, PaymentOption])],
  controllers: [UserController, PaymentOptionController],
  providers: [UserService, PaymentOptionService],
})
export class UserModule {}
