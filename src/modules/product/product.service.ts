import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Product from './entity/product.entity';

@Injectable()
export default class ProductService {
  constructor(
    @InjectRepository(Product)
    private repository: Repository<Product>,
  ) {}

  async create(PRODUCT: Product): Promise<Product> {
    return await this.repository.save(PRODUCT);
  }

  async findAll(): Promise<Product[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Product | null> {
    return await this.repository.findOneBy({ id });
  }

  async buy(id: number, quantity: number) {
    const PRODUCT = await this.repository.findOneBy({ id });
    if (!PRODUCT) {
      throw new Error('Product not found: ' + id);
    }
    PRODUCT.quantity -= quantity;
    await this.repository.save(PRODUCT);
  }

  async findByName(name: string): Promise<Product | null> {
    //todo: use like to get products with similar names
    return await this.repository.findOneBy({ name });
  }
}
