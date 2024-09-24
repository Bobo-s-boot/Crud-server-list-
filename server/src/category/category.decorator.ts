import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ExecException } from 'child_process';
import { Category } from './category.entity';

export const GetId = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const category: Category = request.product;

    return data ? category && category[data] : category;
  },
);
