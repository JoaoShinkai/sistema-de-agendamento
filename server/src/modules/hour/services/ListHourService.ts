import { inject, injectable } from 'tsyringe';
import IHourDTO from '../dtos/IHourDTO';
import IHourRepository from '../repositories/IHourRepository';

@injectable()
export default class ListHourService {
  constructor(
    @inject('HourRepository')
    private hourRepository: IHourRepository
  ) {}

  public async execute(store: number): Promise<IHourDTO[]> {
    return this.hourRepository.list(store);
  }
}
