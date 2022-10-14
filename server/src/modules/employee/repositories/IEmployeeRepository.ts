import IEmployeeDTO from '../dtos/IEmployeeDTO';

export interface IEmployeeRepository {
  create(data: IEmployeeDTO): Promise<IEmployeeDTO>;
  list(store: number): Promise<IEmployeeDTO[]>;
}
