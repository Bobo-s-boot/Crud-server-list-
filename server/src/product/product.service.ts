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
import { ProductRepository } from '../repository/productRepository';

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

  async findOne(id: number) {
    try {
      const product = await this.productRepository.findOne({ where: { id } });

      if (!product) throw new NotFoundException(ERROR_MESSAGE.NOTFOUND_ERROR);

      return product;
    } catch (error) {
      console.error(ERROR_MESSAGE.NOTFOUND_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.NOTFOUND_ERROR);
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const product = await this.productRepository.findOne({ where: { id } });

      if (!product) throw new NotFoundException(ERROR_MESSAGE.NOTFOUND_ERROR);

      return await this.productRepository.update(id, updateProductDto);
    } catch (error) {
      console.error(ERROR_MESSAGE.UPDATE_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.FAILD_UPDATE_ERROR);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const product = await this.productRepository.findOne({ where: { id } });

      if (!product) throw new NotFoundException(ERROR_MESSAGE.NOTFOUND_ERROR);

      await this.productRepository.delete(id);
    } catch (error) {
      console.error(ERROR_MESSAGE.REMOVE_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.REMOVE_ERROR);
    }
  }
}
