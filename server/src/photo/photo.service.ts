import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoRepository } from './photo.repository';
import { GetPhotoShortDataDTO } from './dto/get-photoShordData';
import { Photo } from './photo.entity';
import { ERROR_MESSAGE } from 'src/theme/errors-message';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(PhotoRepository)
    private readonly photoRepository: PhotoRepository,
  ) {}

  async create(createPhotoDto: CreatePhotoDto): Promise<GetPhotoShortDataDTO> {
    try {
      const photo = new Photo();
      photo.url = createPhotoDto.url;

      const saverPhoto = await this.photoRepository.createPhoto(photo);

      const photoDTO: GetPhotoShortDataDTO = {
        id: saverPhoto.id,
        url: saverPhoto.url,
      };

      return photoDTO;
    } catch (error) {
      console.error(ERROR_MESSAGE.PHOTO_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.FAILD_CREATE_ERROR);
    }
  }

  async findAll(): Promise<GetPhotoShortDataDTO[]> {
    try {
      const photo = await this.photoRepository.getPhotosList();

      return photo.map((photo) => ({
        id: photo.id,
        url: photo.url,
      }));
    } catch (error) {
      console.error(ERROR_MESSAGE.LIST_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.LIST_ERROR);
    }
  }

  async findOne(photo: Photo): Promise<GetPhotoShortDataDTO> {
    try {
      const photoDTO: GetPhotoShortDataDTO = {
        id: photo.id,
        url: photo.url,
      };

      return photoDTO;
    } catch (error) {
      console.error(ERROR_MESSAGE.NOTFOUND_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.NOTFOUND_ERROR);
    }
  }

  async update(photo: Photo, updatePhotoDto: UpdatePhotoDto) {
    try {
      const updatePhoto = await this.photoRepository.updatePhoto(
        photo,
        updatePhotoDto,
      );

      return {
        url: updatePhoto.url,
      };
    } catch (error) {
      console.error(ERROR_MESSAGE.UPDATE_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.FAILD_UPDATE_ERROR);
    }
  }

  async remove(photo: Photo): Promise<void> {
    try {
      await this.photoRepository.deletePhoto(photo);
    } catch (error) {
      console.error(ERROR_MESSAGE.REMOVE_ERROR, error.message);
      throw new InternalServerErrorException(ERROR_MESSAGE.REMOVE_ERROR);
    }
  }
}
