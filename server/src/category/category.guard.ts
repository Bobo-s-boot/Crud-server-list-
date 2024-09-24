import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { ERROR_MESSAGE } from 'src/theme/errors-message';

@Injectable()
export class CategoryGuard implements CanActivate {
  constructor(
    @InjectRepository(CategoryRepository)
    private readonly categoryRepository: CategoryRepository,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { params } = request;

    if (!params.categoryId)
      throw new BadRequestException(ERROR_MESSAGE.GUARD_ERROR);

    const category = await this.categoryRepository.getCategory(
      params.categoryId,
    );

    if (!category) throw new BadRequestException(ERROR_MESSAGE.GUARD_ERROR);

    request.category = category;
    return true;
  }
}
