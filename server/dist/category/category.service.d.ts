import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from './category.repository';
import { GetCategoryShortDto } from './dto/get-categoryShortDto';
import { Category } from './category.entity';
export declare class CategoryService {
    private readonly categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    create(createCategoryDto: CreateCategoryDto): Promise<GetCategoryShortDto>;
    findAll(): Promise<GetCategoryShortDto[]>;
    findOne(category: Category): Promise<GetCategoryShortDto>;
    update(category: Category, updateCategoryDto: UpdateCategoryDto): Promise<{
        name: string;
    }>;
    remove(category: Category): Promise<void>;
}
