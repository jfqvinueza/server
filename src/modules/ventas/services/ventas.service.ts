import { PaginationDto } from './../dtos/pagination.dto';
import { FilterProductDto } from './../dtos/products/filter-product.dto';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RepositoryEnum } from 'src/shared/enums';
import { ProductEntity } from '../entities';
import { FindOptions, FindOptionsWhere, Repository } from 'typeorm';
import { CreateProductDto, ReadProductDto, UpdateProductDto } from '../dtos';
import { strict } from 'assert';

@Injectable()
export class VentasService {
    constructor(@Inject(RepositoryEnum.PRODUCT_REPOSITORY) private repository: Repository<ProductEntity>
    ) { }

    async create(payload: CreateProductDto): Promise<ServiceResponseHttpModel> {
        const newProduct = this.repository.create(payload);
        const productCreated = await this.repository.save(newProduct);

        return { data: plainToInstance(ReadProductDto, productCreated) }
    }
    async catalogue(): Promise<ServiceResponseHttpModel> {
        const response = this.repository.findAndCount({ take: 1000 });
        return {
            data: response[0],
            pagination: { totalItems: response[1], limit: 10 }
        };
    }

    async findfAll(params?:FilterProductDto):Promise<ServiceResponseHttpModel>{
        if (params?.limit > 0 && params?.page >= 0 ) {
            return await this.paginateAndFilter(params);
        }
        // re pude poner responce en ver de products
        const product = await this.repository.findAndCount({
            order:{updateAt:'DESC'},
        });

        return {
            data:plainToInstance(ReadProductDto, product[0]),
            pagination:{totalItems:product[1], limit:10}
        }
    }

    async findOne(id?:string):Promise<ServiceResponseHttpModel>{
        const responce = await this.repository.findOne({
            where:{id},
        })
        if (!responce) {
            throw new NotFoundException("product not found");            
        }
        // re pude poner responce en ver de products
        return responce;

    async update(id?:String, payload:UpdateProductDto){
        const responce = await this.repository.findOneBy({id});
        if (!responce) {
            throw new NotFoundException("product not found");            
        }

        this.repository.merge( responce, payload);

        return this.repository.save(responce)
    }

    async remove(id?:String){
        const response = this.repository.findOneBy({id});
        if (!response) {
            throw new NotFoundException("the product not find");
        }
        return this.repository.softRemove(response);
    }

    async removeAllListeners(payload:ProductEntity[]){
        return this.repository.softRemove(payload);
    }


    private async paginateAndFilter(params:FilterProductDto){
        let where:
        FindOptionsWhere<ProductEntity>
        FindOptionsWhere<ProductEntity>[];
        where = {};
        let {page, search} = params;
        const {limit } = params;
        if (search) {
            search = search.trim(),
            page=0,
            where=[];
            where.push({titleAt: Ilike(`%${search}`) })
        }
        const data = this.repository.findAndCount({
            relations:['bloodType', 'gender'],
            where,
            take:limit,
            skip:PaginationDto,getOffset(limit, page),
        });

        return {paginations: {limit, totalItems: data[1]}, data:data[0]}
    }
}


