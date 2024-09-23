import { IsBoolean, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreatePhotoDto {
  @IsOptional()
  @IsString()
  @IsUrl()
  url?: string;
}
