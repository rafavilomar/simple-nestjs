import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Order from '../../order/entity/order.entity';
import Users from './users.entity';

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

  @OneToMany((type) => Order, (order) => order.paymentOption)
  orders: Order[];
}
