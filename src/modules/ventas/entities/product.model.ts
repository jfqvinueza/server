import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from "typeorm";
import { CategoryEntity } from "./category.model";
@Entity({ schema: 'ventas', name: 'product' })
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
    deletedAt: Date;

    @ManyToOne(() => CategoryEntity, category => category.products)
    categories: CategoryEntity ;
  

    @Column({ type: 'varchar', name: 'code', comment: 'nombre del producto' })
    code: string;

    @Column({ type: 'varchar', name: 'title', comment: 'nombre del producto' })
    titleAt: string;

    @Column('integer',{ name: 'price', nullable: false, comment: 'precio' })
    priceAt: number;

    @Column({ type: 'varchar', name: 'description', nullable: false, comment: 'descripcion del producto' })
    description: string;

    @Column({ type: 'varchar', name: 'images', nullable: true, comment: 'imagen del producto' })
    images: string;

    @Column({ type: 'varchar', name: 'category', nullable: false, comment: 'categoria del producto' })
    category: CategoryEntity;

    // @BeforeInsert()

    // @BeforeUpdate()

    // async setMail(){
    //     if(!this.mail){
    //         return;
    //     }

    //     this.code = this.setMail.toLowerCase().trim();
    // }

    // async setCode(){
    //     if(!this.code){
    //         return;
    //     }

    //     this.code = this.setCode.toUperCase().trim();
    // }

    // @BeforeInsert()

    // @BeforeUpdate()

    // async setPassword(){
    //     if (!this.password) {
    //         return;
    //     }
    //     this.password = await Bcrypt.hash(this.password, 12)
    // }

    constructor(parameters) {
        // Aquí puedes inicializar los parámetros de la clase si es necesario
    }
}
