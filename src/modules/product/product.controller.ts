import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import Product from './entity/Product';
import ProductService from './product.service';

@Controller('product')
class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  createProduct(@Body() product: Product): Promise<Product> {
    return this.productService.create(product);
  }

  @Get()
  findAllProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  findOneProduct(@Param('id') id: number): Promise<Product | null> {
    return this.productService.findOne(id);
  }

  @Get('/byName/:name')
  findByName(@Param('name') name: string): Promise<Product | null> {
    return this.productService.findByName(name);
  }
}
export default ProductController;
