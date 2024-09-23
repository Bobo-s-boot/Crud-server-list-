import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';
import { GetProductShortDataDTO } from './dto/get-productShordData';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    create(createProductDto: CreateProductDTO): Promise<GetProductShortDataDTO>;
    findAll(): Promise<GetProductShortDataDTO[]>;
    findOne(product: Product): Promise<GetProductShortDataDTO>;
    update(product: Product, updateProductDto: UpdateProductDto): Promise<{
        id: number;
        name: string;
        description: string | undefined;
        price: number;
    }>;
    remove(product: Product): Promise<void>;
}
