import IHourDTO from '../dtos/IHourDTO';

export default interface IHourRepository {
  create(data: IHourDTO): Promise<IHourDTO>;
  list(store: number): Promise<IHourDTO[]>;
  listByWeekday(store: number, id: number): Promise<IHourDTO[]>;
  delete(id: number): Promise<void>;
  find(id: number, store: number): Promise<IHourDTO | undefined>;
}
