import { CommonModule } from './../common/common.module';
import { Permission } from './permission.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Permission]),
    CommonModule
  ],
  controllers: [PermissionController],
  providers: [PermissionService]
})
export class PermissionModule {}
