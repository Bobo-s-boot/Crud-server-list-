import { Product } from 'src/product/product.entity';
export declare class Category {
    id: number;
    name: string;
    product: Product[];
    createdAt: Date;
    updatedAt: Date;
}
