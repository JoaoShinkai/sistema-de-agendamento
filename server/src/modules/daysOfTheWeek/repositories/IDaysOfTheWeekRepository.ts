import IDaysOfTheWeekDTO from '../dtos/IDaysOfTheWeekDTO';

export default interface IDaysOfTheWeekRepository {
  list(): Promise<IDaysOfTheWeekDTO[]>;
}
