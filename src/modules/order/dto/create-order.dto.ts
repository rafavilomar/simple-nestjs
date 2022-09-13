import Product from '../../product/entity/Product';

export default interface CreateOrderDTO {
  paymentOptionId: number;
  products: Product[];
}
