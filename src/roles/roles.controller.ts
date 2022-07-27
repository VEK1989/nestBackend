import {Body, Controller, Get, Param, Post} from '@nestjs/common'
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import {RolesService} from './roles.service'
import {Role} from './roles.model'
import {CreateRoleDto} from './dto/create-role.dto'

@ApiTags('Роли')
@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({summary: 'Создание роли'})
  @ApiResponse({status: 200, type: Role})
  @Post()
  create(@Body() roleDto: CreateRoleDto) {
    return this.roleService.createRole(roleDto)
  }

  @ApiOperation({summary: 'Получить роль по названию'})
  @ApiResponse({status: 200, type: Role})
  @Get('/:name')
  getByName(@Param('name') name: string) {
    return this.roleService.getRoleByName(name)
  }
}
