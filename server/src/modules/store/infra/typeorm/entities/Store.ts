import IStoreDTO from '@modules/store/dtos/IStoreDTO';
import DefaultEntity from '@shared/infra/typeorm/entities/DefaultEntity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('store')
export default class Store extends DefaultEntity implements IStoreDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
