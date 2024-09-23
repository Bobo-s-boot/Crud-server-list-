import { CreatePhotoDto } from 'src/photo/dto/create-photo.dto';
export declare class CreateProductDTO {
    name: string;
    price: number;
    description?: string;
    photo?: CreatePhotoDto;
}
