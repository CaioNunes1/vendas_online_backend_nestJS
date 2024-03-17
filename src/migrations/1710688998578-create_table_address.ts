import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableAddress1710688998578 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`CREATE TABLE IF NOT EXISTS public.address (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL REFERENCES public."user"(id),
            complement VARCHAR,
            number INTEGER NOT NULL,
            cep VARCHAR NOT NULL,
            city_id INTEGER NOT NULL REFERENCES public.city(id),
            created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL,
            updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL
        );`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table public.address;`)
    }

}
