// import { DataSourceEnum, DataSourceEnum } from "@shared/";

import { DataSource } from "typeorm";
import { CategoryEntity, ProductEntity } from "../products/entities";

export const ventasProviders = [
    {
        provide:RepositoryEnum.PRODUCT_REPOSITORY,
        useFactory:(dataSource:DataSource) => 
        dataSource.getRepository(ProductEntity),
        inject:[DataSourceEnum.PG_DATA_SOURCE],
    },

    {
        provide:RepositoryEnum.CATEGORY_REPOSITORY,
        useFactory:(dataSource:DataSource) => 
        dataSource.getRepository(CategoryEntity),
        inject:[DataSourceEnum.PG_DATA_SOURCE],
    },
]