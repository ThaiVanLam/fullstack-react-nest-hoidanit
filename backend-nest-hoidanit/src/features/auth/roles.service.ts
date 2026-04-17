import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { RoleRepository } from './repositories/role.repository';

@Injectable()
export class RolesService {
  private readonly logger = new Logger(RolesService.name);

  constructor(private readonly roleRepository: RoleRepository) {}

  findAll(): Promise<Role[]> {
    return this.roleRepository.findAll();
  }

  async findOne(id: number): Promise<Role> {
    const role = await this.roleRepository.findById(id);
    if (!role) {
      throw new NotFoundException(`Role #${id} not found`);
    }
    return role;
  }

  async create(dto: CreateRoleDto): Promise<Role> {
    this.logger.log(`Creating role: ${dto.name}`);
    const existing = await this.roleRepository.findByName(dto.name);
    if (existing) {
      throw new ConflictException(`Role "${dto.name}" already exists`);
    }
    return this.roleRepository.save({ name: dto.name });
  }

  async update(id: number, dto: UpdateRoleDto): Promise<Role> {
    const role = await this.findOne(id);
    if (dto.name && dto.name !== role.name) {
      const existing = await this.roleRepository.findByName(dto.name);
      if (existing) {
        throw new ConflictException(`Role "${dto.name}" already exists`);
      }
    }
    return this.roleRepository.save({ ...role, ...dto });
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    this.logger.log(`Deleting role #${id}`);
    await this.roleRepository.delete(id);
  }
}
