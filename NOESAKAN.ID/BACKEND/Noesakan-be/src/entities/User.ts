import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Replies } from "./Replies";
import { Thread } from "./Thread";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  image: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @OneToMany(() => Thread, (thread) => thread.users)
  threads: Thread[];

  @OneToMany(() => Replies, (replies) => replies.users)
  replies: Replies[];

  // @ManyToOne(() => Store, (store) => store.users)
  // store: Store;
}
