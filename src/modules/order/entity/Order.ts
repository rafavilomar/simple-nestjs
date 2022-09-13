import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Product from '../../product/entity/Product';
import PaymentOption from '../../user/entity/PaymentOption';
import Users from '../../user/entity/Users';

export enum OrderStatus {
  IN_PROGRESS,
  COMPLETED,
  CANCELED,
  WAITING,
}

@Entity()
export default class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    length: 11,
  })
  code: string;

  @Column({
    nullable: false,
    enum: OrderStatus,
    default: OrderStatus.IN_PROGRESS,
  })
  status: OrderStatus;

  @Column({ nullable: false, type: 'float' })
  tax: number;

  @Column({ nullable: false, type: 'float' })
  subTotal: number;

  @Column({ nullable: false, type: 'float' })
  total: number;

  @Column({ nullable: false, default: new Date(), type: 'timestamp' })
  createdAt: Date;

  @Column({ nullable: false, default: new Date(), type: 'timestamp' })
  updatedAt: Date;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];

  @ManyToOne((type) => Users, (user) => user.orders)
  user: Users;

  @ManyToOne((type) => PaymentOption, (paymentOption) => paymentOption.orders)
  paymentOption: PaymentOption;
}
