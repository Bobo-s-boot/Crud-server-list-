import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductGuard } from './product.guard';
import { GetId } from './product.decorator';
import { Product } from './product.entity';
import { GetProductShortDataDTO } from './dto/get-productShordData';

@Controller('/shop/:shopId/product/')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/')
  @UsePipes(new ValidationPipe())
  async create(
    @Body(ValidationPipe) createProductDto: CreateProductDTO,
  ): Promise<GetProductShortDataDTO> {
    return this.productService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<GetProductShortDataDTO[]> {
    return this.productService.findAll();
  }

  @Get(':productId')
  @UseGuards(ProductGuard)
  async findOne(@GetId() product: Product): Promise<GetProductShortDataDTO> {
    return this.productService.findOne(product);
  }

  @Patch(':productId')
  @UseGuards(ProductGuard)
  async update(
    @GetId() product: Product,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<any> {
    return this.productService.update(product, updateProductDto);
  }

  @Delete(':productId')
  @UseGuards(ProductGuard)
  async remove(@GetId() product: Product): Promise<void> {
    return this.productService.remove(product);
  }
}
