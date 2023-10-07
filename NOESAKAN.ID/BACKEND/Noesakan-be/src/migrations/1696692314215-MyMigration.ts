import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696692314215 implements MigrationInterface {
    name = 'MyMigration1696692314215'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "storeId" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "storeId"`);
    }

}
