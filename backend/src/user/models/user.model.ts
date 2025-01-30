import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'users',
})
export class UsersModel extends Model {
  @Column
  username: string;

  @Column
  password: string;

}