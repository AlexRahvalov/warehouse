import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

// Импорт модулей
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrganizationsModule } from './organizations/organizations.module';

// Импорт сущностей
import { User } from './users/entities/user.entity';
import { Role } from './users/entities/role.entity';
import { Organization } from './organizations/entities/organization.entity';

@Module({
  imports: [
    // Загрузка переменных окружения
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),

    // Настройка TypeORM
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'warehouse_db',
      
      // Автоматическое подключение сущностей
      entities: [User, Role, Organization],
      
      // Синхронизация схемы (только для разработки!)
      synchronize: process.env.NODE_ENV !== 'production',
      
      // Логирование запросов
      logging: process.env.NODE_ENV !== 'production',
    }),

    // Регистрация модулей приложения
    AuthModule,
    UsersModule,
    OrganizationsModule
  ],
  
  // Контроллеры и провайдеры можно добавить позже
  controllers: [],
  providers: []
})
export class AppModule {} 