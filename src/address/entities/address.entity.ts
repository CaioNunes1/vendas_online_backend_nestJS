import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name:"address"})


export class AddressEntity{
    //Uma entidade representa uma tabela no banco de dados. UserEntity contém a definição da estrutura da tabela user no banco de dados.
    @PrimaryGeneratedColumn("rowid")
    id:number;

    @Column({name:"user_id",nullable:false})//para falar que não pode ser nulo
    user_id:string;

    @Column({name:"complement",nullable:false})//para falar que não pode ser nulo
    complement:string;
    @Column({name:"number",nullable:false})//para falar que não pode ser nulo
    number_address:number;

    @Column({name:"cep",nullable:false})//para falar que não pode ser nulo    
    cep:string;

    @Column({name:"city_id",nullable:false})//para falar que não pode ser nulo
    cityId:number;

    @Column({name:"type_user",nullable:false})//para falar que não pode ser nulo
    type_user:number;

    @CreateDateColumn({name:"createdAt"})
    createdAt:Date;

    @UpdateDateColumn(({name:"updatedAt"}))
    updatedAt:Date;
}
