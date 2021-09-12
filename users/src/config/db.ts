import { createConnection } from 'typeorm';
import { User } from '../entities/User';

export async function initDatabaseConnection() {
  return await createConnection({
    type: 'postgres',
    host: 'postgres',
    database: 'postgres_db',
    port: 5432,
    username: 'postgres_user',
    password: 'postgres_password',
    entities: [User],
    synchronize: true,
    logging: true,
  });
}
