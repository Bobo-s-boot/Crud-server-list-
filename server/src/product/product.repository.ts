import { EntityRepository, Repository } from 'typeorm';
import { CreateProductDto } from '../product/dto/create-product.dto';
import { UpdateProductDto } from '../product/dto/update-product.dto';
import { NotFoundException } from '@nestjs/common';
import { Product } from './product.entity';
import { ERROR_MESSAGE } from 'src/theme/errors-message';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async createProduct(createProduct: CreateProductDto): Promise<Product> {
    const product = new Product();

    (product.name = createProduct.name),
      (product.description = createProduct.description),
      (product.price = createProduct.price);

    return await this.save(product);
  }

  async getProductList(): Promise<Product[]> {
    return await this.find({
      order: {
        id: 'DESC',
      },
    });
  }

  async getProductById(id: number): Promise<Product> {
    const product = await this.findOne({
      where: { id },
    });

    if (!product) throw new NotFoundException(ERROR_MESSAGE.NOTFOUND_ERROR);

    return product;
  }

  async updateProduct(
    id: number,
    updateProduct: UpdateProductDto,
  ): Promise<Product> {
    const product = await this.findOne({
      where: { id },
    });

    if (!product) throw new NotFoundException(ERROR_MESSAGE.NOTFOUND_ERROR);

    if (updateProduct.name !== undefined) product.name = updateProduct.name;
    if (updateProduct.description !== undefined)
      product.description = updateProduct.description;
    if (updateProduct.price !== undefined) product.price = updateProduct.price;

    return await this.save(product);
  }

  async deleteProduct(id: number): Promise<Product> {
    const product = await this.findOne({ where: { id } });

    if (!product) throw new NotFoundException(ERROR_MESSAGE.NOTFOUND_ERROR);

    return await this.remove(product);
  }
}
