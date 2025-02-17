🗺️ Дорожная карта проекта Warehouse Management
1. [ ] Сервис Аутентификации (Auth Service)
Функционал:
- [ ] Регистрация пользователей
- [ ] Подтверждение email
- [ ] Авторизация по JWT
- [ ] Восстановление пароля
- [ ] Управление токенами
Эндпоинты:
- [ ] POST /auth/register
- Регистрация нового пользователя

- [ ] POST /auth/login
- Авторизация пользователя
- Выдача JWT и Refresh токена

- [ ] POST /auth/refresh
- Обновление JWT токена

- [ ] POST /auth/logout
- Выход из системы

- [ ] POST /auth/reset-password
- Запрос на восстановление пароля

- [ ] POST /auth/confirm-email
- Подтверждение email

- [ ] POST /auth/change-password
- Смена пароля

- [ ] POST /auth/forgot-password
- Запрос на восстановление пароля

2. [ ] Сервис Пользователей (Users Service)
Функционал:
- [ ] CRUD профилей пользователей
- [ ] Управление ролями
- [ ] Привязка к организациям
Эндпоинты:
- [ ] GET /users
- Список пользователей

- [ ] GET /users/{id}
- Получение профиля пользователя

- [ ] POST /users
- Создание пользователя

- [ ] PUT /users/{id}
- Обновление профиля

- [ ] DELETE /users/{id}
- Удаление пользователя

- [ ] POST /users/{id}/roles
- Назначение ролей пользователю

- [ ] GET /users/{id}/roles
- Получение ролей пользователя

3. [ ] Сервис Организаций (Organizations Service)
Функционал:
- [ ] Создание/редактирование организаций
- [ ] Добавление пользователей в организацию
Эндпоинты:
- [ ] POST /organizations
- Создание организации

- [ ] GET /organizations
- Список организаций

- [ ] GET /organizations/{id}
- Детали организации

- [ ] PUT /organizations/{id}
- Редактирование организации

- [ ] DELETE /organizations/{id}
- Удаление организации

- [ ] POST /organizations/{id}/users
- Добавление пользователя в организацию

- [ ] GET /organizations/{id}/users
- Список пользователей организации

- [ ] DELETE /organizations/{id}/users/{userId}
- Удаление пользователя из организации

4. [ ] Сервис Складов (Warehouses Service)
Функционал:
- [ ] Добавление/удаление складов
- [ ] Привязка товаров к складам
Эндпоинты:
- [ ] POST /warehouses
- Создание склада

- [ ] GET /warehouses
- Список складов
