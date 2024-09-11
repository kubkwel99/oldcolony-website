import type { NextApiRequest, NextApiResponse } from 'next';

export function middleware(req: NextApiRequest, res: NextApiResponse, next: Function) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
