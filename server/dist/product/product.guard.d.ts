import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ProductRepository } from './product.repository';
export declare class ProductGuard implements CanActivate {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
