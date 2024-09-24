import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoRepository } from './photo.repository';
import { PhotoGuard } from './photo.decorator';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoRepository])],
  providers: [PhotoService, PhotoGuard],
  controllers: [PhotoController],
  exports: [PhotoService],
})
export class PhotoModule {}
