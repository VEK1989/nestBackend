import {Module} from '@nestjs/common'
import {SequelizeModule} from '@nestjs/sequelize'

import {UsersController} from './users.controller'
import {UsersService} from './users.service'
import {User} from './users.model'
import {Role} from '../roles/roles.model'
import {UserRole} from '../roles/user-roles.model'

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Role, UserRole])],
})
export class UsersModule {}
