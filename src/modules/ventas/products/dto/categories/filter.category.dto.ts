import { IsNumber, IsOptional, IsString } from "class-validator";
import { PaginationDto } from "../pagination.product.dto";

export class FilterProductDto extends PaginationDto {

    @IsOptional()
    @IsString(isStringValidationOptions())
    readonly title: string;

  @IsOptional()
  @IsNumber({ menssage: 'el campo codigo de la categoria es opcional' })
  
    readonly category: string;

}