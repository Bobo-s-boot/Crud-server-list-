import { Repository } from 'typeorm';
import { CreateProductDto } from '../product/dto/create-product.dto';
import { UpdateProductDto } from '../product/dto/update-product.dto';
import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';

@Injectable()
export class ProductRepository extends Repository<Product> {
  async createProduct(createProduct: CreateProductDto): Promise<Product> {
    const product = new Product();

    product.name = createProduct.name;
    product.description = createProduct.description;
    product.price = createProduct.price;

    return await this.save(product);
  }

  async getProductList(): Promise<Product[]> {
    return await this.find({
      order: {
        id: 'DESC',
      },
    });
  }

  async updateProduct(
    product: Product,
    updateProduct: UpdateProductDto,
  ): Promise<Product> {
    if (updateProduct.name !== undefined) product.name = updateProduct.name;
    if (updateProduct.description !== undefined)
      product.description = updateProduct.description;
    if (updateProduct.price !== undefined) product.price = updateProduct.price;

    return await this.save(product);
  }

  async deleteProduct(product: Product): Promise<Product> {
    return await this.remove(product);
  }
}
