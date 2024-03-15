import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:"user"})
export class UserEntity{
    @PrimaryGeneratedColumn("rowid")

    id:number;
    @Column({name:"name",nullable:false})//para falar que não pode ser nulo
    name:string;
    @Column({name:"email",nullable:false})//para falar que não pode ser nulo
    email:string;
    @Column({name:"phone"})//para falar que não pode ser nulo
    phone:string;
    @Column({name:"cpf",nullable:false})//para falar que não pode ser nulo
    cpf:string;
    @Column({name:"password",nullable:false})//para falar que não pode ser nulo
    password:string;
}