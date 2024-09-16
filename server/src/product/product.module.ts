import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { ProductGuard } from './product.guard';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository])],
  providers: [ProductService, ProductGuard],
  controllers: [ProductController],
  exports: [ProductService],
})
export class ProductModule {}
