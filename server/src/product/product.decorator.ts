import { createParamDecorator } from '@nestjs/common';
import { Product } from './product.entity';

export const GetId = createParamDecorator((data: string, context) => {
  const id: Product = context.switchToHttp().getRequest().id;

  return data ? id && id[data] : id;
});
