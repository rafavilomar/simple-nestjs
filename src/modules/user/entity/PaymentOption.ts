import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Users from './Users';

@Entity()
export default class PaymentOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({ nullable: false })
  owner: string;

  @Column({ nullable: false })
  number: string;

  @Column({ nullable: false })
  expirationMonth: number;

  @Column({ nullable: false })
  expirationYear: number;

  @ManyToOne((type) => Users, (user) => user.paymentOptions)
  user: Users;
}
