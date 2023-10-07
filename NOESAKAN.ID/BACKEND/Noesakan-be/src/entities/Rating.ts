import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Store } from "./Store";
import { User } from "./User";

@Entity({ name: "ratings" })
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @ManyToOne(() => Store, (store) => store.ratings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  stores: Store;

  @OneToOne(() => User, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  users: User;
}
