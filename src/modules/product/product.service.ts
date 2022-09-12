import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Product from './entity/Product';

@Injectable()
export default class ProductService {
  constructor(
    @InjectRepository(Product)
    private repository: Repository<Product>,
  ) {}

  async create(product: Product): Promise<Product> {
    return await this.repository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Product | null> {
    return await this.repository.findOneBy({ id });
  }

  async buy(id: number, quantity: number) {
    const product = await this.repository.findOneBy({ id });
    if (!product) {
      throw new Error('Product not found: ' + id);
    }
    product.quantity -= quantity;
    await this.repository.save(product);
  }

  async findByName(name: string): Promise<Product | null> {
    //todo: use like to get products with similar names
    return await this.repository.findOneBy({ name });
  }
}
