"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDaysOfTheWeekTable1665758950222 = void 0;
class CreateDaysOfTheWeekTable1665758950222 {
    constructor() {
        this.name = 'CreateDaysOfTheWeekTable1665758950222';
    }
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `days_of_the_week` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` datetime(6) NULL, `id` int NOT NULL AUTO_INCREMENT, `description` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE `days_of_the_week`');
    }
}
exports.CreateDaysOfTheWeekTable1665758950222 = CreateDaysOfTheWeekTable1665758950222;
