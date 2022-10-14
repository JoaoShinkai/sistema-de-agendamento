import IStoreDTO from '../dtos/IStoreDTO';

export default interface IStoreRepository {
  create(data: IStoreDTO): Promise<IStoreDTO>;
  findByEmail(email: string): Promise<IStoreDTO | undefined>;
  update(id: number, data: Partial<IStoreDTO>): Promise<void>;
  hashPassword(password: string): Promise<string>;
}
