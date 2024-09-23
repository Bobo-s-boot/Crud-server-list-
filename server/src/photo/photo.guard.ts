import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Photo } from './photo.entity';

export const GetId = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const requst = context.switchToHttp().getRequest();
    const photo: Photo = requst.photo;

    return data ? photo && photo[data] : photo;
  },
);
