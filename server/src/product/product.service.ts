import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ERROR_MESSAGE } from '../theme/errors-message';
import { ProductRepository } from './product.repository';
import { GetProductShortDataDTO } from './dto/get-productShordData';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private readonly productRepository: ProductRepository,
  ) {}

  async create(
    createProductDto: CreateProductDTO,
  ): Promise<GetProductShortDataDTO> {
    try {
      const product = new Product();
      product.name = createProductDto.name;
      product.description = createProductDto.description;
      product.price = createProductDto.price;

      const savedProduct = await this.productRepository.createProduct(product);

      const productDTO: GetProductShortDataDTO = {
        id: savedProduct.id,
        name: savedProduct.name,
        description: savedProduct.description,
        price: savedProduct.price,
      };

      return productDTO;
    } catch (error) {
      console.error(ERROR_MESSAGE.CREATE_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.FAILD_CREATE_ERROR);
    }
  }

  async findAll(): Promise<GetProductShortDataDTO[]> {
    try {
      const product = await this.productRepository.getProductList();

      return product.map((product) => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
      }));
    } catch (error) {
      console.error(ERROR_MESSAGE.LIST_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.LIST_ERROR);
    }
  }

  async findOne(product: Product): Promise<GetProductShortDataDTO> {
    try {
      const productDTO: GetProductShortDataDTO = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
      };

      return productDTO;
    } catch (error) {
      console.error(ERROR_MESSAGE.NOTFOUND_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.NOTFOUND_ERROR);
    }
  }

  async update(product: Product, updateProductDto: UpdateProductDto) {
    try {
      const updateProduct = await this.productRepository.updateProduct(
        product,
        updateProductDto,
      );

      return {
        id: updateProduct.id,
        name: updateProduct.name,
        description: updateProduct.description,
        price: updateProduct.price,
      };
    } catch (error) {
      console.error(ERROR_MESSAGE.UPDATE_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.FAILD_UPDATE_ERROR);
    }
  }

  async remove(product: Product): Promise<void> {
    try {
      await this.productRepository.deleteProduct(product);
    } catch (error) {
      console.error(ERROR_MESSAGE.REMOVE_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.REMOVE_ERROR);
    }
  }
}
