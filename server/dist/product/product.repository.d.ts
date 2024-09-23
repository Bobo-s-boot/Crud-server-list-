import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDTO } from '../product/dto/create-product.dto';
import { UpdateProductDto } from '../product/dto/update-product.dto';
export declare class ProductRepository extends Repository<Product> {
    createProduct(createProductDto: CreateProductDTO): Promise<Product>;
    getProductList(): Promise<Product[]>;
    getProduct(id: number): Promise<Product>;
    updateProduct(product: Product, updateProduct: UpdateProductDto): Promise<Product>;
    deleteProduct(product: Product): Promise<Product>;
}
