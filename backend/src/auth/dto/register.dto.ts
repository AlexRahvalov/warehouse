import 'reflect-metadata';
import { 
    IsEmail, 
    IsNotEmpty, 
    MinLength, 
    MaxLength 
  } from 'class-validator';
  
  export class RegisterDto {
    @IsEmail({
      allow_ip_domain: false,
      require_tld: true  // Требовать наличие домена верхнего уровня
    }, { 
      message: 'Введите корректный адрес электронной почты' 
    })
    @IsNotEmpty({ message: 'Email обязателен' })
    @MaxLength(255, { message: 'Email слишком длинный' })
    email: string;
  
    @IsNotEmpty({ message: 'Пароль обязателен' })
    @MinLength(8, { message: 'Пароль должен содержать минимум 8 символов' })
    @MaxLength(32, { message: 'Пароль не должен превышать 32 символа' })
    password: string;
  }