import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false, type: 'float' })
  price: number;

  @Column({ nullable: false, type: 'int' })
  quantity: number;

  @Column({ nullable: true })
  image?: string;
}
