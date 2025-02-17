import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from './entities/organization.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async create(organizationData: { name: string }) {
    const organization = this.organizationRepository.create(organizationData);
    return this.organizationRepository.save(organization);
  }

  async findAll() {
    return this.organizationRepository.find();
  }

  async findById(id: number) {
    const organization = await this.organizationRepository.findOne({ 
      where: { id },
      relations: ['users']
    });
    
    if (!organization) {
      throw new NotFoundException(`Organization with ID ${id} not found`);
    }
    
    return organization;
  }

  async addUserToOrganization(organizationId: number, userId: number) {
    const organization = await this.findById(organizationId);
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    if (!organization.users) {
      organization.users = [];
    }

    // Проверяем, что пользователь еще не добавлен
    if (!organization.users.some(u => u.id === userId)) {
      organization.users.push(user);
      await this.organizationRepository.save(organization);
    }

    return organization;
  }
} 