import { Repository } from 'typeorm';
import { CreateProductDTO } from '../product/dto/create-product.dto';
import { UpdateProductDto } from '../product/dto/update-product.dto';
import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async createProduct(createProductDto: CreateProductDTO): Promise<Product> {
    const product = new Product();

    product.name = createProductDto.name;
    product.description = createProductDto.description;
    product.price = createProductDto.price;

    console.log(this);
    return await this.productRepository.save(product);
  }

  async getProductList(): Promise<Product[]> {
    return await this.productRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }

  //функція для дикоратора за допоиогою якого шукаємо наш продукт іd
  async getProduct(id: number): Promise<Product> {
    return await this.productRepository.findOne({ where: { id } });
  }

  async updateProduct(
    product: Product,
    updateProduct: UpdateProductDto,
  ): Promise<Product> {
    if (updateProduct.name !== undefined) product.name = updateProduct.name;
    if (updateProduct.description !== undefined)
      product.description = updateProduct.description;
    if (updateProduct.price !== undefined) product.price = updateProduct.price;

    return await this.productRepository.save(product);
  }

  async deleteProduct(product: Product): Promise<Product> {
    return await this.productRepository.remove(product);
  }
}
