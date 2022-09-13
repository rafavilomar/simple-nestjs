import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import PaymentOptionService from '../user/service/payment-option.service';
import CreateOrderDTO from './dto/create-order.dto';
import Order, { OrderStatus } from './entity/Order';

@Injectable()
export default class OrderService {
  constructor(
    @InjectRepository(Order)
    private repositoru: Repository<Order>,
    private readonly paymentOptionService: PaymentOptionService,
  ) {}

  async findOne(id: number): Promise<Order | null> {
    return this.repositoru.findOneBy({ id });
  }

  async create(newOrder: CreateOrderDTO): Promise<Order> {
    const ORDER = new Order();
    ORDER.code = `INVC-${Math.floor(Math.random() * 100000)}`;
    ORDER.status = OrderStatus.IN_PROGRESS;
    ORDER.subTotal = 0;
    ORDER.products = newOrder.products;

    newOrder.products.forEach((product) => {
      ORDER.subTotal += product.price;
    });

    ORDER.tax = ORDER.subTotal * 0.1;
    ORDER.total = ORDER.subTotal + ORDER.tax;

    return await this.repositoru.save(ORDER);
  }

  async findByUser(userId: number): Promise<Order[]> {
    return await this.repositoru.find({ where: { user: { id: userId } } });
  }

  async updatePaymentOption(orderId: number, paymentOptionId: number) {
    const ORDER = await this.repositoru.findOneBy({ id: orderId });
    if (!ORDER) {
      throw new Error('Order not found: ' + orderId);
    }

    const PAYMENT_OPTION = await this.paymentOptionService.findById(
      paymentOptionId,
    );
    if (!PAYMENT_OPTION) {
      throw new Error('Payment option not found: ' + paymentOptionId);
    }

    ORDER.paymentOption = PAYMENT_OPTION;
    return await this.repositoru.save(ORDER);
  }

  async cancelOrder(orderId: number) {
    const ORDER = await this.repositoru.findOneBy({ id: orderId });
    if (!ORDER) {
      throw new Error('Order not found: ' + orderId);
    }

    ORDER.status = OrderStatus.CANCELED;
    return await this.repositoru.save(ORDER);
  }

  async payOrder(orderId: number) {
    const ORDER = await this.repositoru.findOneBy({ id: orderId });
    if (!ORDER) {
      throw new Error('Order not found: ' + orderId);
    }
    if (ORDER.status !== OrderStatus.IN_PROGRESS) {
      throw new Error('Order is not in progress: ' + orderId);
    }

    ORDER.status = OrderStatus.WAITING;
    return await this.repositoru.save(ORDER);
  }

  async deliverOrder(orderId: number) {
    const ORDER = await this.repositoru.findOneBy({ id: orderId });
    if (!ORDER) {
      throw new Error('Order not found: ' + orderId);
    }
    if (ORDER.status !== OrderStatus.WAITING) {
      throw new Error('Order not ready to be delivered: ' + orderId);
    }

    ORDER.status = OrderStatus.COMPLETED;
    return await this.repositoru.save(ORDER);
  }
}
