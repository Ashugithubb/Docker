import { MigrationInterface, QueryRunner } from "typeorm";

export class YourMigrationName1752140495677 implements MigrationInterface {
    name = 'YourMigrationName1752140495677'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_entity" ADD "age" integer NOT NULL DEFAULT '15'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_entity" DROP COLUMN "age"`);
    }

}
