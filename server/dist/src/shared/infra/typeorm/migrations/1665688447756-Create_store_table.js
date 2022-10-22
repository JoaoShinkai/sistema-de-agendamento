"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStoreTable1665688447756 = void 0;
class CreateStoreTable1665688447756 {
    constructor() {
        this.name = 'CreateStoreTable1665688447756';
    }
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `store` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` datetime(6) NULL, `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, UNIQUE INDEX `IDX_edfd1cc801464d89c565d84c20` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP INDEX `IDX_edfd1cc801464d89c565d84c20` ON `store`');
        await queryRunner.query('DROP TABLE `store`');
    }
}
exports.CreateStoreTable1665688447756 = CreateStoreTable1665688447756;
