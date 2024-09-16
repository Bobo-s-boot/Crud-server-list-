import {
  CanActivate,
  ExecutionContext,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { ERROR_MESSAGE } from 'src/theme/errors-message';

@Injectable()
export class ProductGuard implements CanActivate {
  constructor(
    @InjectRepository(ProductRepository)
    private readonly productRepository: ProductRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { params } = request;

    if (!params.productId)
      throw new BadRequestException(ERROR_MESSAGE.GUARD_ERROR);

    console.log(this.productRepository);
    const product = await this.productRepository.getProduct(params.productId);

    if (!product) throw new BadRequestException(ERROR_MESSAGE.GUARD_ERROR);

    request.product = product;
    return true;
  }
}
