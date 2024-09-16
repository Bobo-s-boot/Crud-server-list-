import { Repository } from 'typeorm';
import { CreateProductDto } from '../product/dto/create-product.dto';
import { UpdateProductDto } from '../product/dto/update-product.dto';
import { Product } from './product.entity';
export declare class ProductRepository {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    getProductList(): Promise<Product[]>;
    getProduct(id: number): Promise<Product>;
    updateProduct(product: Product, updateProduct: UpdateProductDto): Promise<Product>;
    deleteProduct(product: Product): Promise<Product>;
}
