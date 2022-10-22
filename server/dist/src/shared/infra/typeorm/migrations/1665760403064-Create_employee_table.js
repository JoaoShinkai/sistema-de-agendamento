"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeeTable1665760403064 = void 0;
class CreateEmployeeTable1665760403064 {
    constructor() {
        this.name = 'CreateEmployeeTable1665760403064';
    }
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `employee` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` datetime(6) NULL, `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `gender` varchar(255) NOT NULL, `age` int NOT NULL, `phone` int NOT NULL, `store_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
        await queryRunner.query('ALTER TABLE `employee` ADD CONSTRAINT `FK_5d45870d6107b3c64e6d5d7aedf` FOREIGN KEY (`store_id`) REFERENCES `store`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `employee` DROP FOREIGN KEY `FK_5d45870d6107b3c64e6d5d7aedf`');
        await queryRunner.query('DROP TABLE `employee`');
    }
}
exports.CreateEmployeeTable1665760403064 = CreateEmployeeTable1665760403064;
