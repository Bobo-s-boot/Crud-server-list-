import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { CategoryGuard } from './category.guard';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryRepository])],
  providers: [CategoryService, CategoryGuard],
  controllers: [CategoryController],
  exports: [CategoryService],
})
export class CategoryModule {}
