import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import PaymentOption from './PaymentOption';

@Entity()
export default class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    unique: true,
  })
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  enterprise?: string;

  @OneToMany((type) => PaymentOption, (paymentOption) => paymentOption.user)
  paymentOptions: PaymentOption[];
}
