import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { ProductGuard } from './product.guard';
import { Product } from './product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductRepository])],
  controllers: [ProductController],
  providers: [ProductService, ProductGuard],
  exports: [ProductService],
})
export class ProductModule {}
