import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common/decorators';
import CreateOrderDTO from './dto/create-order.dto';
import Order from './entity/Order';
import OrderService from './order.service';

@Controller('order')
export default class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrder(@Body() order: CreateOrderDTO): Promise<Order> {
    return this.orderService.create(order);
  }

  @Post('/updatePaymentOption')
  updatePaymentOption(
    @Query('id') orderId: number,
    @Query('paymentOptionId') paymentOptionId: number,
  ): Promise<Order> {
    return this.orderService.updatePaymentOption(orderId, paymentOptionId);
  }

  @Post('/cancel/:id')
  cancelOrder(@Param('id') orderId: number): Promise<Order> {
    return this.orderService.cancelOrder(orderId);
  }

  @Get(':id')
  findOneOrder(@Param('id') id: number): Promise<Order | null> {
    return this.orderService.findOne(id);
  }

  @Get('/user/:userId')
  findByUser(@Param('userId') userId: number): Promise<Order[]> {
    return this.orderService.findByUser(userId);
  }

  @Post('/pay/:id')
  payOrder(@Param('id') orderId: number): Promise<Order> {
    return this.orderService.payOrder(orderId);
  }

  @Post('/complete/:id')
  completeOrder(@Param('id') orderId: number): Promise<Order> {
    return this.orderService.deliverOrder(orderId);
  }
}
