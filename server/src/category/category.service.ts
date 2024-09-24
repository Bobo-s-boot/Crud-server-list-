import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from './category.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { GetCategoryShortDto } from './dto/get-categoryShortDto';
import { ERROR_MESSAGE } from 'src/theme/errors-message';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryRepository)
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async create(
    createCategoryDto: CreateCategoryDto,
  ): Promise<GetCategoryShortDto> {
    try {
      const category = new Category();
      category.name = createCategoryDto.name;

      const saveCategory =
        await this.categoryRepository.createCategory(category);

      const categoryDTO: GetCategoryShortDto = {
        id: saveCategory.id,
        name: saveCategory.name,
      };

      return categoryDTO;
    } catch (error) {
      console.error(ERROR_MESSAGE.CREATE_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.FAILD_CREATE_ERROR);
    }
  }

  async findAll(): Promise<GetCategoryShortDto[]> {
    try {
      const category = await this.categoryRepository.getCategoriesList();

      return category.map((category) => ({
        id: category.id,
        name: category.name,
      }));
    } catch (error) {
      console.error(ERROR_MESSAGE.LIST_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.LIST_ERROR);
    }
  }

  async findOne(category: Category): Promise<GetCategoryShortDto> {
    try {
      const categoryDTO: GetCategoryShortDto = {
        id: category.id,
        name: category.name,
      };

      return categoryDTO;
    } catch (error) {
      console.error(ERROR_MESSAGE.NOTFOUND_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.NOTFOUND_ERROR);
    }
  }

  async update(category: Category, updateCategoryDto: UpdateCategoryDto) {
    try {
      const updatePhoto = await this.categoryRepository.updateCategory(
        category,
        updateCategoryDto,
      );

      return {
        name: category.name,
      };
    } catch (error) {
      console.error(ERROR_MESSAGE.UPDATE_ERROR);
      throw new InternalServerErrorException(ERROR_MESSAGE.FAILD_UPDATE_ERROR);
    }
  }

  async remove(category: Category): Promise<void> {
    try {
      await this.categoryRepository.deleteCategory(category);
    } catch (error) {
      console.error(ERROR_MESSAGE.REMOVE_ERROR);
      throw new InternalServerErrorException(ERROR_MESSAGE.REMOVE_ERROR);
    }
  }
}
