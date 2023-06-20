import { Inject, Injectable } from '@nestjs/common';
import { RepositoryEnum } from 'src/shared/enums';
import { ProductEntity } from '../products/entities';
import { Repository } from 'typeorm';
import { CreateProductDto } from 'src/items/dto/create.product.dto';
import { ReadProductDto } from 'src/items/dto/read.product.dto';

@Injectable()
export class VentasService {
    constructor(
        @Inject(RepositoryEnum.PRODUCT_REPOSITORY)
        private repository:Repository <ProductEntity>,
    
    ){}

  async  create(payload:CreateProductDto):Promise<ServiceResponseHttpModel>{
        const newProduct = this.repository.create(payload);
        const productCreated = async this.repository.save(newProyect);

        return {data: plainToInstance(ReadProductDto, productCreated)}
    }
    async catalogue():Promise<ServiceResponseHttpModel>{
        const response = this.repository.findAndCount({take:1000});
        return {data:response[0],
        pagination:{totalItems:response[1], limit:10}
        }
    }
}
