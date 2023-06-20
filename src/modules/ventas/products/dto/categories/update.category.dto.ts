import { PartialType } from "@nestjs/swagger";
import { BaseProductDto } from "./base.category.dto";

class UpdateProductDto extends PartialType(BaseProductDto) {
    constructor(parameters) {
        
    }
}