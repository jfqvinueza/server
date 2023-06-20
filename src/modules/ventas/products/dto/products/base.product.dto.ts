import { CategoryEntity } from '../../products/entities/category.entity';
import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

@Exclude()
export class BaseProductDto {
  @Expose()
  readonly category: CategoryEntity;

  @Expose()
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @Expose()
  @IsString()
  @IsNotEmpty()
  readonly decoration: string;

  @Expose()
  @IsString()
  readonly image: string;
}
