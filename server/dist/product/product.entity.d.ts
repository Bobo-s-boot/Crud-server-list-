import { Category } from 'src/category/category.entity';
import { Photo } from 'src/photo/photo.entity';
export declare class Product {
    id: number;
    name: string;
    price: number;
    description?: string;
    photo?: Photo;
    category: Category;
    createdAt: Date;
    updatedAt: Date;
}
