import { inject, injectable } from 'tsyringe';
import IHourDTO from '../dtos/IHourDTO';
import IHourRepository from '../repositories/IHourRepository';

@injectable()
export default class CreateHourService {
  constructor(
    @inject('HourRepository')
    private hourRepository: IHourRepository
  ) {}

  public async execute(data: IHourDTO): Promise<IHourDTO> {
    return this.hourRepository.create(data);
  }
}
