import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface ITokenPayload {
  id: number;
  name: string;
  email: string;
  iat: number;
  exp: number;
}

export class AuthController {
  async VerifyStoreToken(req: Request, res: Response): Promise<void> {
    const { authorization } = req.headers;

    if (!authorization) {
      res.status(401).json({ message: 'Your session is invalid or expired' });
    } else {
      const token = authorization.replace('Bearer', '').trim();

      try {
        const data = jwt.verify(token, process.env.JWT_STORE_SECRET as string);

        res.status(200).json(data as ITokenPayload);
      } catch {
        res.status(401).json({ message: 'Your session is invalid or expired' });
      }
    }
  }
}
