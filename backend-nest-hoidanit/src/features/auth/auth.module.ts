import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { User } from './entities/user.entity';
import { RoleRepository } from './repositories/role.repository';
import { UserRepository } from './repositories/user.repository';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Role, User])],
  controllers: [RolesController, UsersController],
  providers: [RolesService, RoleRepository, UsersService, UserRepository],
  exports: [RolesService, RoleRepository, UsersService, UserRepository],
})
export class AuthModule {}
