import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateHourTable1665771644066 implements MigrationInterface {
  name = 'CreateHourTable1665771644066';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `hour` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` datetime(6) NULL, `id` int NOT NULL AUTO_INCREMENT, `startTime` time NOT NULL, `endTime` time NOT NULL, `store_id` int NULL, `weekday_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    );
    await queryRunner.query(
      'ALTER TABLE `hour` ADD CONSTRAINT `FK_cdce7573e33c74d0f49b4bc4398` FOREIGN KEY (`store_id`) REFERENCES `store`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE `hour` ADD CONSTRAINT `FK_022fc98ce46eb9732444d43f26e` FOREIGN KEY (`weekday_id`) REFERENCES `days_of_the_week`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `hour` DROP FOREIGN KEY `FK_022fc98ce46eb9732444d43f26e`'
    );
    await queryRunner.query(
      'ALTER TABLE `hour` DROP FOREIGN KEY `FK_cdce7573e33c74d0f49b4bc4398`'
    );
    await queryRunner.query('DROP TABLE `hour`');
  }
}
