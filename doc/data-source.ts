import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import AppEntity from './src/entities/app.entity';

dotenv.config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [AppEntity],
  migrations: ['src/migrations/**/*.ts'],
  synchronize: false,
});
