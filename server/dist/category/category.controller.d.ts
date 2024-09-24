import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { GetCategoryShortDto } from './dto/get-categoryShortDto';
import { Category } from './category.entity';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<GetCategoryShortDto>;
    findAll(): Promise<GetCategoryShortDto[]>;
    findOne(category: Category): Promise<GetCategoryShortDto>;
    update(category: Category, updateCategoryDto: UpdateCategoryDto): Promise<any>;
    remove(category: Category): Promise<void>;
}
