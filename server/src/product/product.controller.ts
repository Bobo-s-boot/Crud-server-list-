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
import { ProductGuard } from '../guard/product.guard';
import { GetId } from 'src/guard/get-id.decorator';
import { ERROR_MESSAGE } from 'src/theme/errors-message';
import { SUCCESSFULLY_MESSAGE } from 'src/theme/successfully-message';

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
      return {
        message: SUCCESSFULLY_MESSAGE.CREATE_SUCCESSFULLY,
        data: newProduct,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        message: ERROR_MESSAGE.CREATE_ERROR,
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
  findOne(@GetId() id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(ProductGuard)
  update(@GetId() id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(ProductGuard)
  remove(@GetId() id: string) {
    return this.productService.remove(+id);
  }
}
