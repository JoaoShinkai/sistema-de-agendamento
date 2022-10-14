import IDaysOfTheWeekDTO from '@modules/daysOfTheWeek/dtos/IDaysOfTheWeekDTO';
import DefaultEntity from '@shared/infra/typeorm/entities/DefaultEntity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('days_of_the_week')
export default class DaysOfTheWeek
  extends DefaultEntity
  implements IDaysOfTheWeekDTO
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
