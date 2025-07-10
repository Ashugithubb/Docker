import { IsString, IsStrongPassword } from "class-validator";

export default class Userdto{
    @IsString()
    name:string
    @IsStrongPassword()
    password:string
}