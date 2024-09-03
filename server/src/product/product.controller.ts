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
import { ERROR_MESSAGE } from 'src/theme/errors-message';
import { Product } from './product.entity';

@Controller('product')
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

  @Get(':id')
  @UseGuards(ProductGuard)
  findOne(@GetId() product: Product) {
    return product;
  }

  @Patch(':id')
  @UseGuards(ProductGuard)
  update(
    @GetId() product: Product,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(product.id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(ProductGuard)
  remove(@GetId() product: Product) {
    return this.productService.remove(product.id);
  }
}
