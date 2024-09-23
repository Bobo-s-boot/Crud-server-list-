import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoRepository } from './photo.repository';
import { ERROR_MESSAGE } from 'src/theme/errors-message';

@Injectable()
export class PhotoGuard implements CanActivate {
  constructor(
    @InjectRepository(PhotoRepository)
    private readonly photoRepository: PhotoRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { params } = request;

    if (!params.photoId)
      throw new BadRequestException(ERROR_MESSAGE.GUARD_ERROR);

    const photo = await this.photoRepository.getPhoto(params.photoId);

    if (!photo) throw new BadRequestException(ERROR_MESSAGE.GUARD_ERROR);

    request.photo = photo;
    return true;
  }
}
