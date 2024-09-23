import { Photo } from 'src/photo/photo.entity';
export declare class Product {
    id: number;
    name: string;
    price: number;
    description?: string;
    photo?: Photo;
    createdAt: Date;
    updatedAt: Date;
}
