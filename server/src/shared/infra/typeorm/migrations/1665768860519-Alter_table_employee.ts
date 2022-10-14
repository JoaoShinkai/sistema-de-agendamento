import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableEmployee1665768860519 implements MigrationInterface {
  name = 'AlterTableEmployee1665768860519';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `employee` DROP COLUMN `phone`');
    await queryRunner.query(
      'ALTER TABLE `employee` ADD `phone` varchar(255) NOT NULL'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `employee` DROP COLUMN `phone`');
    await queryRunner.query('ALTER TABLE `employee` ADD `phone` int NOT NULL');
  }
}
