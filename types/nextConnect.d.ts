import { NextApiRequest } from 'next';

declare module 'next' {
  interface NextApiRequest {
    file?: {
      originalname: string;
      buffer: Buffer;
    };
  }
}