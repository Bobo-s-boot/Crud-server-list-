import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';
import { GetProductShortDataDTO } from './dto/get-productShordData';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<GetProductShortDataDTO>;
    findAll(): Promise<GetProductShortDataDTO[]>;
    findOne(product: Product): Promise<GetProductShortDataDTO>;
    update(product: Product, updateProductDto: UpdateProductDto): Promise<any>;
    remove(product: Product): Promise<void>;
}
