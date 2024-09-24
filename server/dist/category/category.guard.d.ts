import { CanActivate, ExecutionContext } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
export declare class CategoryGuard implements CanActivate {
    private readonly categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
