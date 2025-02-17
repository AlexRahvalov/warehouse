import { 
  Controller, 
  Post, 
  Get, 
  Body, 
  Param, 
  UseGuards 
} from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('organizations')
@UseGuards(JwtAuthGuard)
export class OrganizationsController {
  constructor(private organizationsService: OrganizationsService) {}

  @Post()
  async create(@Body() body: { name: string }) {
    return this.organizationsService.create(body);
  }

  @Get()
  async findAll() {
    return this.organizationsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.organizationsService.findById(id);
  }

  @Post(':id/users')
  async addUserToOrganization(
    @Param('id') organizationId: number, 
    @Body('userId') userId: number
  ) {
    return this.organizationsService.addUserToOrganization(organizationId, userId);
  }
} 