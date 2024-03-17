import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableState1710688966211 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`CREATE TABLE IF NOT EXISTS public.state (
            id SERIAL PRIMARY KEY,
            name VARCHAR NOT NULL,
            created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL,
            updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL
        );`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table public.state;`)
    }

}
