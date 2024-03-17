import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name:"user"})


export class UserEntity{
    //Uma entidade representa uma tabela no banco de dados. UserEntity contém a definição da estrutura da tabela user no banco de dados.
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

    @Column({name:"type_user",nullable:false})//para falar que não pode ser nulo
    type_user:number;

    @CreateDateColumn({name:"createdAt"})
    createdAt:Date;

    @UpdateDateColumn(({name:"updatedAt"}))
    updatedAt:Date;
}