import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user@mail.ru", description: "Почта" })
  @IsString({ message: "Must be string" })
  @IsEmail({}, { message: "Incorect email" })
  readonly email: string;
  @ApiProperty({ example: "12345", description: "password" })
  @IsString({ message: "Must be string" })
  @Length(4, 16, { message: "min length 4, max 16" })
  readonly password: string;
}
