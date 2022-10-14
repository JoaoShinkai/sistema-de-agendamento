import IEmployeeDTO from '@modules/employee/dtos/IEmployeeDTO';
import { IEmployeeRepository } from '@modules/employee/repositories/IEmployeeRepository';
import { getRepository, Repository } from 'typeorm';
import Employee from '../entities/Employee';

export class EmployeeRepository implements IEmployeeRepository {
  private repository: Repository<Employee>;

  constructor() {
    this.repository = getRepository(Employee);
  }

  async create(data: IEmployeeDTO): Promise<IEmployeeDTO> {
    return this.repository.save(data);
  }

  async list(store: number): Promise<IEmployeeDTO[]> {
    return this.repository.find({ where: { store: { id: store } } });
  }
}
