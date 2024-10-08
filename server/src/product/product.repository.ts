import { EntityRepository, Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDTO } from '../product/dto/create-product.dto';
import { UpdateProductDto } from '../product/dto/update-product.dto';
import { ERROR_MESSAGE } from 'src/theme/errors-message';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async createProduct(createProductDto: CreateProductDTO): Promise<Product> {
    const product = new Product();

    product.name = createProductDto.name;
    product.description = createProductDto.description;
    product.price = createProductDto.price;

    return await this.save(product);
  }

  async getProductList(): Promise<Product[]> {
    return await this.find({
      order: {
        id: 'DESC',
      },
    });
  }

  async getProduct(id: number): Promise<Product> {
    const product = await this.findOne({ where: { id } });
    if (!product) {
      throw new Error(ERROR_MESSAGE.PRODUCT_ERROR);
    }
    return product;
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
