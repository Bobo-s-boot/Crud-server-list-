import { CanActivate, ExecutionContext } from '@nestjs/common';
import { PhotoRepository } from './photo.repository';
export declare class PhotoGuard implements CanActivate {
    private readonly photoRepository;
    constructor(photoRepository: PhotoRepository);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
