import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { PhotoRepository } from './photo.repository';
import { GetPhotoShortDataDTO } from './dto/get-photoShordData';
import { Photo } from './photo.entity';
export declare class PhotoService {
    private readonly photoRepository;
    constructor(photoRepository: PhotoRepository);
    create(createPhotoDto: CreatePhotoDto): Promise<GetPhotoShortDataDTO>;
    findAll(): Promise<GetPhotoShortDataDTO[]>;
    findOne(photo: Photo): Promise<GetPhotoShortDataDTO>;
    update(photo: Photo, updatePhotoDto: UpdatePhotoDto): Promise<{
        url: string | undefined;
    }>;
    remove(photo: Photo): Promise<void>;
}
