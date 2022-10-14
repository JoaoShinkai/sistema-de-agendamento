import { inject, injectable } from 'tsyringe';
import IStoreDTO from '../dtos/IStoreDTO';
import IStoreRepository from '../repositories/IStoreRepository';

@injectable()
export default class findByEmailStoreService {
  constructor(
    @inject('StoreRepository')
    private storeRepository: IStoreRepository
  ) {}

  public async execute(email: string): Promise<IStoreDTO> {
    const store = await this.storeRepository.findByEmail(email);

    if (!store) {
      throw new Error();
    }

    return store;
  }
}
