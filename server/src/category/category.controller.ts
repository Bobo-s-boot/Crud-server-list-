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
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { GetCategoryShortDto } from './dto/get-categoryShortDto';
import { Category } from './category.entity';
import { GetId } from './category.decorator';
import { CategoryGuard } from './category.guard';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/')
  @UsePipes(new ValidationPipe())
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<GetCategoryShortDto> {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  async findAll(): Promise<GetCategoryShortDto[]> {
    return this.categoryService.findAll();
  }

  @Get(':categoryId')
  @UseGuards(CategoryGuard)
  async findOne(category: Category): Promise<GetCategoryShortDto> {
    return this.categoryService.findOne(category);
  }

  @Patch(':categoryId')
  @UseGuards(CategoryGuard)
  async update(
    @GetId() category: Category,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<any> {
    return this.categoryService.update(category, updateCategoryDto);
  }

  @Delete(':categoryId')
  @UseGuards(CategoryGuard)
  async remove(@GetId() category: Category): Promise<void> {
    return this.categoryService.remove(category);
  }
}
