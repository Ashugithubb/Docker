import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class AppEntity{
   @PrimaryGeneratedColumn()
    id:number 
    @Column({unique:true})
    name:string

    @Column({nullable:false})
    password:string

    @Column({default:15})
    age:number

} 