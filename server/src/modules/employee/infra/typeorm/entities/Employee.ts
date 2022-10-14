import IEmployeeDTO from '@modules/employee/dtos/IEmployeeDTO';
import Store from '@modules/store/infra/typeorm/entities/Store';
import DefaultEntity from '@shared/infra/typeorm/entities/DefaultEntity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('employee')
export default class Employee extends DefaultEntity implements IEmployeeDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  age: number;

  @Column()
  phone: string;

  @ManyToOne(() => Store)
  @JoinColumn({ name: 'store_id' })
  store: Store;
}
