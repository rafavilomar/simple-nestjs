import Product from '../../product/entity/product.entity';

export default class CreateOrderDTO {
  paymentOptionId: number;
  products: Product[];
}
