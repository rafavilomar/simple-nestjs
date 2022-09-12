import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import CreatePaymentOptionDTO from '../dto/create-payment-option.dto';
import PaymentOption from '../entity/PaymentOption';
import PaymentOptionService from '../service/payment-option.service';

@Controller('payment-option')
export default class PaymentOptionController {
  constructor(private readonly paymentOptionService: PaymentOptionService) {}

  @Post()
  createPaymentOption(
    @Body() newPaymentOption: CreatePaymentOptionDTO,
  ): Promise<PaymentOption> {
    return this.paymentOptionService.create(newPaymentOption);
  }

  @Put()
  updatePaymentOption(
    @Body() updatedPaymentOption: PaymentOption,
  ): Promise<PaymentOption> {
    return this.paymentOptionService.update(updatedPaymentOption);
  }

  @Get(':id')
  getPaymentOption(@Param('id') id: number): Promise<PaymentOption | null> {
    return this.paymentOptionService.findById(id);
  }

  @Get('byUser/:userId')
  getPaymentOptionsByUser(
    @Param('userId') userId: number,
  ): Promise<PaymentOption[]> {
    return this.paymentOptionService.findByUser(userId);
  }

  @Delete(':id')
  deletePaymentOption(@Param('id') id: number): Promise<void> {
    return this.paymentOptionService.delete(id);
  }
}
