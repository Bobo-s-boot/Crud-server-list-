import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class UpdatePhotoDto {
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  url: string;
}
