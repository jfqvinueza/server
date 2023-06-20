import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany } from "typeorm";
import { ProductEntity } from './product.entity';
@Entity({ schema: 'ventas', name: 'category' })
export class CategoryEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
    deletedAt: Date;

    @OneToMany(() => ProductEntity, product => product.categories)
    products: ProductEntity[];


    @Column({ type: 'varchar', name: 'code', comment: 'nombre del producto' })
    code: string;

    @Column({ type: 'varchar', name: 'title', comment: 'nombre del producto' })
    titleAt: string;

    @Column('integer', { name: 'price', nullable: false, comment: 'precio' })
    priceAt: number;

    @Column({ type: 'varchar', name: 'description', nullable: false, comment: 'descripcion del producto' })
    description: string;

    @Column({ type: 'varchar', name: 'images', nullable: true, comment: 'imagen del producto' })
    images: string;
}