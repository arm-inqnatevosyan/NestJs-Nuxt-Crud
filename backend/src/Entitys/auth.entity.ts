import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  email: string;

  @Column({ length: 25 })
  name: string;

  @Column()
  password: string;
}
