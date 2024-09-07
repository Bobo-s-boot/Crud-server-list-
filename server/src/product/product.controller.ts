import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductGuard } from './product.guard';
import { GetId } from './product.decorator';
import { Product } from './product.entity';

@Controller('/shop/:shopId/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':productId')
  @UseGuards(ProductGuard)
  findOne(@Param('productId') productId: number, @GetId() product: Product) {
    return product;
  }

  @Patch(':productId')
  @UseGuards(ProductGuard)
  update(
    @GetId() product: Product,
    @Body() updateProductDto: UpdateProductDto,
    @Param('productId') productId: number,
  ) {
    return this.productService.update(product, updateProductDto);
  }

  @Delete(':productId')
  @UseGuards(ProductGuard)
  remove(@GetId() product: Product, @Param('productId') productId: number) {
    return this.productService.remove(product);
  }
}
