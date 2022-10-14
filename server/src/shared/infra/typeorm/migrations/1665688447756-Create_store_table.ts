import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStoreTable1665688447756 implements MigrationInterface {
  name = 'CreateStoreTable1665688447756';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `store` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` datetime(6) NULL, `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, UNIQUE INDEX `IDX_edfd1cc801464d89c565d84c20` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'DROP INDEX `IDX_edfd1cc801464d89c565d84c20` ON `store`'
    );
    await queryRunner.query('DROP TABLE `store`');
  }
}
