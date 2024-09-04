import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ERROR_MESSAGE } from '../theme/errors-message';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private readonly productRepository: ProductRepository,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const newProduct = await this.productRepository.create(createProductDto);
      return await this.productRepository.save(newProduct);
    } catch (error) {
      console.error(ERROR_MESSAGE.CREATE_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.FAILD_CREATE_ERROR);
    }
  }

  async findAll(): Promise<Product[]> {
    try {
      return await this.productRepository.find();
    } catch (error) {
      console.error(ERROR_MESSAGE.LIST_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.LIST_ERROR);
    }
  }

  async findOne(product: Product): Promise<Product> {
    try {
      if (!product) throw new NotFoundException(ERROR_MESSAGE.NOTFOUND_ERROR);
      return product;
    } catch (error) {
      console.error(ERROR_MESSAGE.NOTFOUND_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.NOTFOUND_ERROR);
    }
  }

  async update(product: Product, updateProductDto: UpdateProductDto) {
    try {
      if (!product) throw new NotFoundException(ERROR_MESSAGE.NOTFOUND_ERROR);
      return await this.productRepository.update(product, updateProductDto);
    } catch (error) {
      console.error(ERROR_MESSAGE.UPDATE_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.FAILD_UPDATE_ERROR);
    }
  }

  async remove(product: Product): Promise<void> {
    try {
      if (!product) throw new NotFoundException(ERROR_MESSAGE.NOTFOUND_ERROR);
      await this.productRepository.delete(product);
    } catch (error) {
      console.error(ERROR_MESSAGE.REMOVE_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.REMOVE_ERROR);
    }
  }
}
