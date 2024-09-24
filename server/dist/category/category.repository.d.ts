import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryRepository extends Repository<Category> {
    createCategory(createCategoryDtop: CreateCategoryDto): Promise<Category>;
    getCategoriesList(): Promise<Category[]>;
    getCategory(id: number): Promise<Category>;
    updateCategory(category: Category, updateCategory: UpdateCategoryDto): Promise<Category>;
    deleteCategory(category: Category): Promise<Category>;
}
