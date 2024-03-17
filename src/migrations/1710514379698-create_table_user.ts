import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1710514379698 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`CREATE TABLE IF NOT EXISTS public.user (
            id SERIAL PRIMARY KEY,
            name VARCHAR NOT NULL,
            email VARCHAR NOT NULL,
            cpf VARCHAR NOT NULL,
            type_user INTEGER NOT NULL,
            phone VARCHAR NOT NULL,
            password VARCHAR NOT NULL,
            created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL,
            updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL
        );
        
        
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        drop table public.user;
        `)
    }

}
