import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name:"city"})


export class CityEntity{
    //Uma entidade representa uma tabela no banco de dados. UserEntity contém a definição da estrutura da tabela user no banco de dados.
    @PrimaryGeneratedColumn("rowid")
    id:number;

    @Column({name:"state_id",nullable:false})//para falar que não pode ser nulo
    stateId:string;

    @Column({name:"name",nullable:false})//para falar que não pode ser nulo
    name:string;

    @CreateDateColumn({name:"createdAt"})
    createdAt:Date;

    @UpdateDateColumn(({name:"updatedAt"}))
    updatedAt:Date;
}