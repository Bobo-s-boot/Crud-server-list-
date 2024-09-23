import { EntityRepository, Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { ERROR_MESSAGE } from 'src/theme/errors-message';

@EntityRepository(Photo)
export class PhotoRepository extends Repository<Photo> {
  async createPhoto(createPhotoDto: CreatePhotoDto): Promise<Photo> {
    const photo = new Photo();

    photo.url = createPhotoDto.url;

    return await this.save(photo);
  }

  async getPhotosList(): Promise<Photo[]> {
    return await this.find({
      order: {
        id: 'DESC',
      },
    });
  }

  async getPhoto(id: number): Promise<Photo> {
    const photo = await this.findOne({ where: { id } });
    if (!photo) {
      throw new Error(ERROR_MESSAGE.PHOTO_ERROR);
    }
    return photo;
  }

  async updatePhoto(photo: Photo, updatePhoto: UpdatePhotoDto): Promise<Photo> {
    if (updatePhoto.url !== undefined) photo.url = updatePhoto.url;

    return await this.save(photo);
  }

  async deletePhoto(photo: Photo): Promise<Photo> {
    return await this.remove(photo);
  }
}
