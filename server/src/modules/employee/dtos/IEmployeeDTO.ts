import IStoreDTO from '@modules/store/dtos/IStoreDTO';
import IDefaultDTO from '@shared/dtos/IDefaultDTO';

export default interface IEmployeeDTO extends IDefaultDTO {
  name: string;
  gender: string;
  age: number;
  phone: string;
  store: IStoreDTO;
}
