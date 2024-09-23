import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { GetPhotoShortDataDTO } from './dto/get-photoShordData';
import { PhotoGuard } from './photo.decorator';
import { GetId } from './photo.guard';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Post('/')
  @UsePipes(new ValidationPipe())
  async create(
    @Body() createPhotoDto: CreatePhotoDto,
  ): Promise<GetPhotoShortDataDTO> {
    return this.photoService.create(createPhotoDto);
  }

  @Get()
  findAll(): Promise<GetPhotoShortDataDTO[]> {
    return this.photoService.findAll();
  }

  @Get(':photoId')
  @UseGuards(PhotoGuard)
  async findOne(@GetId() photo: Photo): Promise<GetPhotoShortDataDTO> {
    return this.photoService.findOne(photo);
  }

  @Patch(':photoId')
  @UseGuards(PhotoGuard)
  update(
    @GetId() photo: Photo,
    @Body() updatePhotoDto: UpdatePhotoDto,
  ): Promise<any> {
    return this.photoService.update(photo, updatePhotoDto);
  }

  @Delete(':photoId')
  @UseGuards(PhotoGuard)
  remove(@GetId() photo: Photo): Promise<void> {
    return this.photoService.remove(photo);
  }
}
