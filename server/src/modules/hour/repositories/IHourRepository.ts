import IHourDTO from '../dtos/IHourDTO';

export default interface IHourRepository {
  create(data: IHourDTO): Promise<IHourDTO>;
}
