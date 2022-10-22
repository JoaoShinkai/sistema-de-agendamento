"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlterTableEmployee1665768860519 = void 0;
class AlterTableEmployee1665768860519 {
    constructor() {
        this.name = 'AlterTableEmployee1665768860519';
    }
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `employee` DROP COLUMN `phone`');
        await queryRunner.query('ALTER TABLE `employee` ADD `phone` varchar(255) NOT NULL');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `employee` DROP COLUMN `phone`');
        await queryRunner.query('ALTER TABLE `employee` ADD `phone` int NOT NULL');
    }
}
exports.AlterTableEmployee1665768860519 = AlterTableEmployee1665768860519;
