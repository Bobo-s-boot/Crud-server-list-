import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Product } from './product.entity';

export const GetId = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const product: Product = request.product;

    return data ? product && product[data] : product;
  },
);
