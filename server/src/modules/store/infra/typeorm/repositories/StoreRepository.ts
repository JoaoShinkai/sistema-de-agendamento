import IStoreDTO from '@modules/store/dtos/IStoreDTO';
import IStoreRepository from '@modules/store/repositories/IStoreRepository';
import bcryptjs from 'bcryptjs';
import { getRepository, Repository } from 'typeorm';
import Store from '../entities/Store';

export default class StoreRepository implements IStoreRepository {
  private repository: Repository<Store>;

  constructor() {
    this.repository = getRepository(Store);
  }

  async create(data: IStoreDTO): Promise<IStoreDTO> {
    return this.repository.save(data);
  }

  async findByEmail(email: string): Promise<IStoreDTO | undefined> {
    return this.repository.findOne({ where: { email } });
  }

  async update(id: number, data: Partial<IStoreDTO>): Promise<void> {
    await this.repository.update(id, data);
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcryptjs.genSalt(8);
    return bcryptjs.hashSync(password, salt);
  }
}
