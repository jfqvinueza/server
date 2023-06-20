import { ProductEntity } from '../../products/entities/product.model';
import { Exclude, Expose } from "class-transformer";

import {
  IsNotEmpty,  //que la datano debe esta vacio
  IsNumber, 
  IsPositive,
  IsString,
} from 'class-validator';

@Exclude()

export class BaseProductDto {
  @IsString()
  @IsNotEmpty()
  readonly title:string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price:number;

  @IsString()
  @IsNotEmpty()
  readonly decoration;

  @IsString()
  readonly image;

  @IsNumber()
  @IsNotEmpty()
  readonly category: ProductEntity;
}
