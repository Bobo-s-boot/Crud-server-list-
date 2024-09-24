import { EntityRepository, Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ERROR_MESSAGE } from 'src/theme/errors-message';
import { UpdateCategoryDto } from './dto/update-category.dto';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  async createCategory(
    createCategoryDtop: CreateCategoryDto,
  ): Promise<Category> {
    const category = new Category();

    category.name = createCategoryDtop.name;

    return await this.save(category);
  }

  async getCategoriesList(): Promise<Category[]> {
    return await this.find({
      order: {
        id: 'DESC',
      },
    });
  }

  async getCategory(id: number): Promise<Category> {
    const category = await this.findOne({
      where: { id },
    });

    if (!category) throw new Error(ERROR_MESSAGE.CATEGORY_ERROR);

    return category;
  }

  async updateCategory(
    category: Category,
    updateCategory: UpdateCategoryDto,
  ): Promise<Category> {
    if (updateCategory.name !== undefined) category.name = updateCategory.name;

    return await this.save(category);
  }

  async deleteCategory(category: Category): Promise<Category> {
    return await this.remove(category);
  }
}
