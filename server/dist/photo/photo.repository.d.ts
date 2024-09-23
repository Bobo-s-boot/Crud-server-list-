import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
export declare class PhotoRepository extends Repository<Photo> {
    createPhoto(createPhotoDto: CreatePhotoDto): Promise<Photo>;
    getPhotosList(): Promise<Photo[]>;
    getPhoto(id: number): Promise<Photo>;
    updatePhoto(photo: Photo, updatePhoto: UpdatePhotoDto): Promise<Photo>;
    deletePhoto(photo: Photo): Promise<Photo>;
}
