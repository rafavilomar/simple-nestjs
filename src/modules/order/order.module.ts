import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import PaymentOption from '../user/entity/payment-option.entity';
import Users from '../user/entity/users.entity';
import PaymentOptionService from '../user/service/payment-option.service';
import UserService from '../user/service/user.service';
import Order from './entity/order.entity';
import OrderController from './order.controller';
import OrderService from './order.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, PaymentOption, Users])],
  controllers: [OrderController],
  providers: [OrderService, PaymentOptionService, UserService],
})
export default class OrderModule {}
