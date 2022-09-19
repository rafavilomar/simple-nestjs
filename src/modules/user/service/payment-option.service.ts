import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreatePaymentOptionDTO from '../dto/create-payment-option.dto';
import PaymentOption from '../entity/payment-option.entity';
import UserService from './user.service';

@Injectable()
export default class PaymentOptionService {
  constructor(
    @InjectRepository(PaymentOption)
    private readonly paymentOptionRepository: Repository<PaymentOption>,
    private readonly userService: UserService,
  ) {}

  async create(paymentOption: CreatePaymentOptionDTO): Promise<PaymentOption> {
    const USER = await this.userService.findById(paymentOption.userId);
    console.log(USER);
    if (!USER) {
      throw new Error('User not found: ' + paymentOption.userId);
    }
    const PAYMENT_OPTION = new PaymentOption();
    PAYMENT_OPTION.user = USER;
    PAYMENT_OPTION.name = paymentOption.name;
    PAYMENT_OPTION.owner = paymentOption.owner;
    PAYMENT_OPTION.number = paymentOption.number;
    PAYMENT_OPTION.expirationMonth = paymentOption.expirationMonth;
    PAYMENT_OPTION.expirationYear = paymentOption.expirationYear;

    return await this.paymentOptionRepository.save(PAYMENT_OPTION);
  }

  async update(paymentOption: PaymentOption): Promise<PaymentOption> {
    return await this.paymentOptionRepository.save(paymentOption);
  }

  async delete(id: number): Promise<void> {
    await this.paymentOptionRepository.delete(id);
  }

  async findById(id: number): Promise<PaymentOption | null> {
    return await this.paymentOptionRepository.findOneBy({ id });
  }

  async findByUser(userId: number): Promise<PaymentOption[]> {
    const USER = await this.userService.findById(userId);
    if (!USER) {
      throw new Error('User not found: ' + userId);
    }
    return await this.paymentOptionRepository.find({ where: { user: USER } });
  }
}
