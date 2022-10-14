import { inject, injectable } from 'tsyringe';
import IEmployeeDTO from '../dtos/IEmployeeDTO';
import { IEmployeeRepository } from '../repositories/IEmployeeRepository';

@injectable()
export default class CreateEmployeeService {
  constructor(
    @inject('EmployeeRepository')
    private employeeRepository: IEmployeeRepository
  ) {}

  public async execute(data: IEmployeeDTO): Promise<IEmployeeDTO> {
    return this.employeeRepository.create(data);
  }
}
