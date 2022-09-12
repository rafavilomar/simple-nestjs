import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import ProductModule from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    // CONFIG
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_PG_HOST,
      port: Number(process.env.DB_PG_PORT),
      username: process.env.DB_PG_USERNAME,
      password: process.env.DB_PG_PASSWORD,
      database: process.env.DB_PG_DATABASE,
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
      migrations: [],
    }),
    // MODULES
    UserModule,
    ProductModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
