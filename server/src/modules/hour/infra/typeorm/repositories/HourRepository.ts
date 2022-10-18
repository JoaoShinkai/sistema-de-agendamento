import IHourDTO from '@modules/hour/dtos/IHourDTO';
import IHourRepository from '@modules/hour/repositories/IHourRepository';
import { getRepository, Repository } from 'typeorm';
import { Hour } from '../entities/Hour';

export class HourRepository implements IHourRepository {
  private repository: Repository<Hour>;

  constructor() {
    this.repository = getRepository(Hour);
  }

  async create(data: IHourDTO): Promise<IHourDTO> {
    return this.repository.save(data);
  }

  async list(store: number): Promise<IHourDTO[]> {
    return this.repository.find({
      where: {
        store: {
          id: store
        }
      },
      relations: ['weekday']
    });
  }

  async delete(id: number): Promise<void> {
    await this.repository.softDelete(id);
  }

  async find(id: number, store: number): Promise<IHourDTO | undefined> {
    return this.repository.findOne({
      where: {
        id,
        store: {
          id: store
        }
      }
    });
  }
}
