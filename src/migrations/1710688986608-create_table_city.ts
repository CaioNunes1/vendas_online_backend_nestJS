import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCity1710688986608 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`CREATE TABLE IF NOT EXISTS public.city (
            id SERIAL PRIMARY KEY,
            state_id INTEGER NOT NULL REFERENCES public.state(id),
            name VARCHAR NOT NULL,
            created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL,
            updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL
        );`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table public.city;`)
    }

}
