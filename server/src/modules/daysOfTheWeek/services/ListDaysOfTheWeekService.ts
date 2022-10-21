import { inject, injectable } from 'tsyringe';
import IDaysOfTheWeekDTO from '../dtos/IDaysOfTheWeekDTO';
import IDaysOfTheWeekRepository from '../repositories/IDaysOfTheWeekRepository';

@injectable()
export default class DaysOfTheWeek {
  constructor(
    @inject('DaysOfTheWeekRepository')
    private daysOfTheWeekRepository: IDaysOfTheWeekRepository
  ) {}

  public async execute(): Promise<IDaysOfTheWeekDTO[]> {
    return this.daysOfTheWeekRepository.list();
  }
}
