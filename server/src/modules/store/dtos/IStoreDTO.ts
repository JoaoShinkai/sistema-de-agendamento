import IDefaultDTO from '@shared/dtos/IDefaultDTO';

export default interface IStoreDTO extends IDefaultDTO {
  name: string;
  email: string;
  password: string;
}
