import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comments } from './comments.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  email: string;

  @Column({ length: 25 })
  name: string;

  @Column()
  password: string;

  @OneToMany(() => Comments, (comments) => comments.user)
  comments: Comments[];
}
