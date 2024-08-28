import {
  CanActivate,
  ExecutionContext,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/product/product.entity';
import { ERROR_MESSAGE } from 'src/theme/errors-message';

@Injectable()
export class ProductGuard implements CanActivate {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { params } = request;

    if (!params.id) throw new BadRequestException(ERROR_MESSAGE.GUARD_ERROR);

    const product = await this.productRepository.findOne({
      where: { id: params.id },
    });

    if (!product) throw new BadRequestException(ERROR_MESSAGE.GUARD_ERROR);

    request.product = product;
    return true;
  }
}
