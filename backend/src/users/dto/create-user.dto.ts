import { 
  IsEmail, 
  IsNotEmpty, 
  MinLength, 
  MaxLength,
  IsOptional
} from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Некорректный формат email' })
  @IsNotEmpty({ message: 'Email обязателен' })
  @MaxLength(255, { message: 'Email слишком длинный' })
  email: string;

  @IsNotEmpty({ message: 'Пароль обязателен' })
  @MinLength(8, { message: 'Пароль должен содержать минимум 8 символов' })
  @MaxLength(32, { message: 'Пароль не должен превышать 32 символа' })
  password: string;

  @IsOptional()
  @MaxLength(100, { message: 'Имя слишком длинное' })
  firstName?: string;

  @IsOptional()
  @MaxLength(100, { message: 'Фамилия слишком длинная' })
  lastName?: string;
} 