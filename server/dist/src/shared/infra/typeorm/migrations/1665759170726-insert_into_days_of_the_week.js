"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertIntoDaysOfTheWeek1665759170726 = void 0;
class insertIntoDaysOfTheWeek1665759170726 {
    async up(queryRunner) {
        await queryRunner.query("INSERT INTO days_of_the_week(description) VALUES ('Domingo'), ('Segunda-Feira'), ('Terça-Feira'), ('Quarta-Feira'), ('Quinta-Feira'), ('Sexta-Feira'), ('Sábado') ");
    }
    async down(queryRunner) {
        await queryRunner.query("DELETE FROM days_of_the_week WHERE description IN ('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado')");
    }
}
exports.insertIntoDaysOfTheWeek1665759170726 = insertIntoDaysOfTheWeek1665759170726;
