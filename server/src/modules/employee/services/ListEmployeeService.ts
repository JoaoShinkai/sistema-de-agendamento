import { inject, injectable } from 'tsyringe';
import IEmployeeDTO from '../dtos/IEmployeeDTO';
import { IEmployeeRepository } from '../repositories/IEmployeeRepository';

@injectable()
export default class ListEmployeeService {
  constructor(
    @inject('EmployeeRepository')
    private employeeRepository: IEmployeeRepository
  ) {}

  public async execute(store: number): Promise<IEmployeeDTO[]> {
    return this.employeeRepository.list(store);
  }
}
