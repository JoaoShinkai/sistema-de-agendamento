import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IHourRepository from '../repositories/IHourRepository';

@injectable()
export default class DeleteHourService {
  constructor(
    @inject('HourRepository')
    private hourRepository: IHourRepository
  ) {}

  public async execute(id: number, store: number): Promise<void> {
    const hour = await this.hourRepository.find(id, store);

    if (!hour) {
      throw new AppError('Data not exists');
    }

    await this.hourRepository.delete(id);
  }
}
