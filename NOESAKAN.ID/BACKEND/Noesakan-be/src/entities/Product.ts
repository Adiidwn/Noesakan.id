import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Store } from "./Store";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  stock: number;

  @Column({ nullable: true })
  image: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @ManyToOne(() => Store, (store) => store.products, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  stores: Store;
}
