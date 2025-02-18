import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Глобальная валидация
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Удаляет неразрешенные свойства
    forbidNonWhitelisted: true, // Выбрасывает ошибку при наличии запрещенных свойств
    transform: true, // Преобразует входные данные в соответствующие типы
  }));

  // Настройка CORS
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  });

  const port = process.env.APP_PORT || 3001;
  await app.listen(port, () => {
    console.log(`Backend запущен на порту ${port}`);
  });
}
bootstrap();
