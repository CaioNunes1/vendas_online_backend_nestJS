import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name:"state"})


export class StateEntity{
    //Uma entidade representa uma tabela no banco de dados. UserEntity contém a definição da estrutura da tabela user no banco de dados.
    @PrimaryGeneratedColumn("rowid")

    id:number;
    @Column({name:"name",nullable:false})//para falar que não pode ser nulo
    name:string;

    @CreateDateColumn({name:"created_at"})
    created_at:Date;

    @UpdateDateColumn(({name:"updated_at"}))
    updated_at:Date;
}