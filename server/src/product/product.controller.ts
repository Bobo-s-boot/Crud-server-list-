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
import { ProductGuard } from '../guard/product-guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(ProductGuard)
  @HttpCode(HttpStatus.BAD_REQUEST)
  create(@Body() createProductDto: CreateProductDto) {
    try {
      const newProduct = this.productService.create(createProductDto);
      return { message: 'New Product successfuly created', data: newProduct };
    } catch (error) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Error createing product',
        error: error.message,
      };
    }
  }

  @Get()
  @UseGuards(ProductGuard)
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @UseGuards(ProductGuard)
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(ProductGuard)
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(ProductGuard)
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
