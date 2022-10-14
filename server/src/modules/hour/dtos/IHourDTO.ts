import IDaysOfTheWeekDTO from '@modules/daysOfTheWeek/dtos/IDaysOfTheWeekDTO';
import IStoreDTO from '@modules/store/dtos/IStoreDTO';
import IDefaultDTO from '@shared/dtos/IDefaultDTO';

export default interface IHourDTO extends IDefaultDTO {
  startTime: Date;
  endTime: Date;
  store: IStoreDTO;
  weekday: IDaysOfTheWeekDTO;
}
