import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './common/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
//import { OrganizationsModule } from './organizations/organizations.module';
//import { WarehousesModule } from './warehouses/warehouses.module';
//import { ProductsModule } from './products/products.module';
//import { ContractorsModule } from './contractors/contractors.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    //OrganizationsModule,
    //WarehousesModule,
    //ProductsModule,
    //ContractorsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}