import { 
  IsOptional, 
  IsEmail, 
  MaxLength 
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail({}, { message: 'Некорректный формат email' })
  @MaxLength(255, { message: 'Email слишком длинный' })
  email?: string;

  @IsOptional()
  @MaxLength(100, { message: 'Имя слишком длинное' })
  firstName?: string;

  @IsOptional()
  @MaxLength(100, { message: 'Фамилия слишком длинная' })
  lastName?: string;
} 