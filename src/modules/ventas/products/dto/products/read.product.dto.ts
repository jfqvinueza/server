import { BaseProductDto } from "./base.product.dto";
import { Exclude, Expose } from "class-transformer";

@Exclude()
class ReadProductDto extends BaseProductDto {
  @Expose()
  readonly id: number;

  @Expose()
  readonly title: string;

  @Expose()
  readonly price: number;

  @Expose()
  readonly description: string;

  @Expose()
  readonly image: string;
}
