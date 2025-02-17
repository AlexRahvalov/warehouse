import { 
  Injectable, 
  ConflictException, 
  NotFoundException 
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>
  ) {}

  async create(userData: CreateUserDto) {
    const existingUser = await this.findByEmail(userData.email);
    if (existingUser) {
      throw new ConflictException('Пользователь с таким email уже существует');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = this.userRepository.create({
      email: userData.email,
      passwordHash: hashedPassword,
      firstName: userData.firstName,
      lastName: userData.lastName
    });
    
    // Назначаем роль по умолчанию
    const defaultRole = await this.roleRepository.findOne({ 
      where: { name: 'user' } 
    });
    
    if (defaultRole) {
      user.roles = [defaultRole];
    }

    return this.userRepository.save(user);
  }

  async findAll() {
    return this.userRepository.find({
      relations: ['roles', 'organizations']
    });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ 
      where: { email },
      relations: ['roles']
    });
    return user || undefined;
  }

  async findById(id: number): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ 
      where: { id },
      relations: ['roles', 'organizations']
    });
    return user || undefined;
  }

  async update(id: number, updateData: UpdateUserDto) {
    const user = await this.findById(id);
    if (!user) {
      throw new NotFoundException(`Пользователь с ID ${id} не найден`);
    }

    // Обновляем только переданные поля
    if (updateData.email) user.email = updateData.email;
    if (updateData.firstName) user.firstName = updateData.firstName;
    if (updateData.lastName) user.lastName = updateData.lastName;

    return this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findById(id);
    if (!user) {
      throw new NotFoundException(`Пользователь с ID ${id} не найден`);
    }

    return this.userRepository.remove(user);
  }

  async assignRole(userId: number, roleId: number) {
    const user = await this.findById(userId);
    const role = await this.roleRepository.findOne({ where: { id: roleId } });

    if (!user) {
      throw new NotFoundException(`Пользователь с ID ${userId} не найден`);
    }

    if (!role) {
      throw new NotFoundException(`Роль с ID ${roleId} не найдена`);
    }

    // Проверяем, что роль еще не назначена
    if (!user.roles.some(r => r.id === roleId)) {
      user.roles.push(role);
      await this.userRepository.save(user);
    }

    return user;
  }

  async getUserRoles(userId: number) {
    const user = await this.findById(userId);
    if (!user) {
      throw new NotFoundException(`Пользователь с ID ${userId} не найден`);
    }

    return user.roles;
  }
} 