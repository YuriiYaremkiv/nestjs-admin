import { ApiProperty } from "@nestjs/swagger";
import {
  ForeignKey,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Role } from "./roles.model";

@Table({ tableName: "user-roles", createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Role)
  @Column({ type: DataType.NUMBER })
  roleId: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.NUMBER })
  userId: number;
}
