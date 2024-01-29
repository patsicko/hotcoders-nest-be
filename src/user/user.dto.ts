// user.dto.ts
import { IsNotEmpty, IsEmail, IsString, IsOptional, IsBoolean } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
  
  @IsOptional()
  momoPaymentResponse?: string | object;

  @IsString()
  role:string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsBoolean()
  adminApproval?: boolean;

  @IsOptional()
  @IsBoolean()
  managerApproval?: boolean;
}
