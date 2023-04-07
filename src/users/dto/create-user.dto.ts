import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "user@mail.com", description: "Email" })
  readonly email: string;
  @ApiProperty({ example: "123456", description: "Password" })
  readonly password: string;
}
