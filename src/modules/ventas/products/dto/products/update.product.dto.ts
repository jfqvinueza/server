import { PartialType } from "@nestjs/swagger";
import { BaseProductDto } from "./base.product.dto";

class UpdateProductDto extends PartialType(BaseProductDto) {
    constructor(parameters) {
        
    }
}