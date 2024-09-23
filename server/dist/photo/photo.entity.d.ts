import { Product } from 'src/product/product.entity';
export declare class Photo {
    id: number;
    url?: string;
    product?: Product;
    createdAt: Date;
    updatedAt: Date;
}
