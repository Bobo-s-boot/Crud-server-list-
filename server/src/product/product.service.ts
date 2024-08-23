import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = await this.productRepository.create(createProductDto);
    return await this.productRepository.save(newProduct);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({ where: { id } });

    if (!product) throw new NotFoundException('Product not found!');

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOne({ where: { id } });

    if (!product) throw new NotFoundException('Product not found!');

    return await this.productRepository.update(id, updateProductDto);
  }

  async remove(id: number) {
    const product = await this.productRepository.findOne({ where: { id } });

    if (!product) throw new NotFoundException('Product not found!');

    return await this.productRepository.delete(id);
  }
}
