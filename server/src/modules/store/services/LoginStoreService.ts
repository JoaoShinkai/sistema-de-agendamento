import { AppError } from '@shared/errors/AppError';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import IStoreDTO from '../dtos/IStoreDTO';
import IStoreRepository from '../repositories/IStoreRepository';

interface ILoginStore {
  store: Partial<IStoreDTO>;
  token: string;
}

@injectable()
export default class LoginStoreService {
  constructor(
    @inject('StoreRepository')
    private storeRepository: IStoreRepository
  ) {}

  public async execute(email: string, password: string): Promise<ILoginStore> {
    const store = await this.storeRepository.findByEmail(email);

    if (!store) {
      throw new AppError('E-mail e/ou senha inválidos', 401);
    }

    const isValidPassword = await bcryptjs.compare(password, store.password);

    if (!isValidPassword) {
      throw new AppError('E-mail e/ou senha inválidos', 401);
    }

    const token = jwt.sign(
      {
        id: store.id,
        name: store.name,
        email: store.email
      },
      process.env.JWT_STORE_SECRET as string,
      {
        expiresIn: '1d'
      }
    );

    const newStore: Partial<IStoreDTO> = { ...store };
    delete newStore.password;

    return { store: newStore, token };
  }
}
