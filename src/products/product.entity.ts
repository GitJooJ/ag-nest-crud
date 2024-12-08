import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Product' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  price: number;

  @Column({ type: 'varchar', length: 255 })
  description: string;
}