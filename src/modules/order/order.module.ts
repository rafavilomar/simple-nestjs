import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import PaymentOption from '../user/entity/PaymentOption';
import Users from '../user/entity/Users';
import PaymentOptionService from '../user/service/payment-option.service';
import UserService from '../user/service/user.service';
import Order from './entity/Order';
import OrderController from './order.controller';
import OrderService from './order.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, PaymentOption, Users])],
  controllers: [OrderController],
  providers: [OrderService, PaymentOptionService, UserService],
})
export default class OrderModule {}
