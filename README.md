# Warehouse Management System

## Описание проекта
Система управления складом с функционалом регистрации, управления пользователями, организациями, складами и товарами.

## Технологический стек
- Backend: NestJS (TypeScript)
- Frontend: Nuxt 3 (Vue 3, TypeScript)
- База данных: MariaDB
- ORM: Prisma
- Менеджер пакетов: Bun

## Требования к окружению
- Bun 1.x
- Node.js 18+ (для совместимости)
- MariaDB 10.5+

## Установка и запуск

### Клонирование репозитория
```bash
git clone https://github.com/your-username/warehouse-management.git
cd warehouse-management
```

### Установка зависимостей
```bash
bun install
```

### Настройка базы данных
1. Создайте базу данных в MariaDB
2. Настройте `.env` файл
3. Выполните миграции:
```bash
cd backend
bun prisma migrate dev
```

### Запуск backend
```bash
bun run start:backend
```

### Запуск frontend
```bash
bun run start:frontend
```

## Документация
- [Roadmap проекта](ROADMAP.md)
- [Структура базы данных](start.md)

## Лицензия
[Укажите вашу лицензию] 