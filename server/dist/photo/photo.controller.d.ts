import { PhotoService } from './photo.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { GetPhotoShortDataDTO } from './dto/get-photoShordData';
import { Photo } from './photo.entity';
export declare class PhotoController {
    private readonly photoService;
    constructor(photoService: PhotoService);
    create(createPhotoDto: CreatePhotoDto): Promise<GetPhotoShortDataDTO>;
    findAll(): Promise<GetPhotoShortDataDTO[]>;
    findOne(photo: Photo): Promise<GetPhotoShortDataDTO>;
    update(photo: Photo, updatePhotoDto: UpdatePhotoDto): Promise<any>;
    remove(photo: Photo): Promise<void>;
}
