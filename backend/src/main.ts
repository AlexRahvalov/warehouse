import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import 'reflect-metadata';
import * as dotenv from 'dotenv';

dotenv.config(); // Загрузка переменных окружения

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Глобальная валидация
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,  // Удаляет незарегистрированные свойства
      forbidNonWhitelisted: true,  // Выбрасывает ошибку при наличии лишних свойств
      transform: true,   // Преобразует входные данные в соответствии с DTO
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  );

  await app.listen(3000);
}
bootstrap(); 