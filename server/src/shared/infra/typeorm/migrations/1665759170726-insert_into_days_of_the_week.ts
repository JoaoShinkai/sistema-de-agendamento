import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertIntoDaysOfTheWeek1665759170726
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO days_of_the_week(description) VALUES ('Domingo'), ('Segunda-Feira'), ('Terça-Feira'), ('Quarta-Feira'), ('Quinta-Feira'), ('Sexta-Feira'), ('Sábado') "
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "DELETE FROM days_of_the_week WHERE description IN ('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado')"
    );
  }
}
