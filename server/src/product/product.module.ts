import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createParamDecorator } from '@nestjs/common';
import { Product } from 'src/product/product.entity';
import { ProductRepository } from './product.repository';
import { ProductGuard } from './product.guard';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository])],
  controllers: [ProductController],
  providers: [ProductService, ProductGuard],
})
export class ProductModule {}
