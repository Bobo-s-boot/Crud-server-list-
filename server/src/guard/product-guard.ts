import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ProductGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const product = request.product;

    if (!product) {
      throw new UnauthorizedException('Product not found in request');
    }

    return true;
  }
}
