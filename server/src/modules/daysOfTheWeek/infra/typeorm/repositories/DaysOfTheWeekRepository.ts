import IDaysOfTheWeekDTO from '@modules/daysOfTheWeek/dtos/IDaysOfTheWeekDTO';
import IDaysOfTheWeekRepository from '@modules/daysOfTheWeek/repositories/IDaysOfTheWeekRepository';
import { getRepository, Repository } from 'typeorm';
import DaysOfTheWeek from '../entities/DaysOfTheWeek';

export default class DaysOfTheWeekRepository
  implements IDaysOfTheWeekRepository
{
  private repository: Repository<DaysOfTheWeek>;

  constructor() {
    this.repository = getRepository(DaysOfTheWeek);
  }

  list(): Promise<IDaysOfTheWeekDTO[]> {
    return this.repository.find();
  }
}
