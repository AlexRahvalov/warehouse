// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mariadb',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'warehouse_db',
        autoLoadEntities: true,
        synchronize: true, // Отключить в продакшене
      }),
    ],
  })
  export class DatabaseModule {}
