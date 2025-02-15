import { IsString, IsNotEmpty } from 'class-validator';

export class SeriesDto {
  @IsString()
  @IsNotEmpty()
  readonly studyInstanceUid: string;

  @IsString()
  @IsNotEmpty()
  readonly seriesInstanceUid: string;

}
