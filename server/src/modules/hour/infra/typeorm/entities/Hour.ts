import DaysOfTheWeek from '@modules/daysOfTheWeek/infra/typeorm/entities/DaysOfTheWeek';
import IHourDTO from '@modules/hour/dtos/IHourDTO';
import Store from '@modules/store/infra/typeorm/entities/Store';
import DefaultEntity from '@shared/infra/typeorm/entities/DefaultEntity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('hour')
export class Hour extends DefaultEntity implements IHourDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'time' })
  startTime: Date;

  @Column({ type: 'time' })
  endTime: Date;

  @ManyToOne(() => Store)
  @JoinColumn({ name: 'store_id' })
  store: Store;

  @ManyToOne(() => DaysOfTheWeek)
  @JoinColumn({ name: 'weekday_id' })
  weekday: DaysOfTheWeek;
}
