import {BelongsToMany, Column, DataType, Model, Table} from 'sequelize-typescript'
import {ApiProperty} from '@nestjs/swagger'

import {Role} from '../roles/roles.model'
import {UserRole} from '../roles/user-roles.model'

interface UserCreationAttr {
  email: string
  password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttr> {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @ApiProperty({example: 'user@mail.ru', description: 'Адрес электронной почты'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string

  @ApiProperty({example: '12345', description: 'Пароль'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[]
}
