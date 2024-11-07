import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';


export default function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log(req.body);
  

  const { login, password } = req.body;
  const correctLogin = process.env.AUTH_LOGIN;
  const correctPassword = process.env.AUTH_PASSWORD;

  if (password === correctPassword && login === correctLogin) {
    const cookie = serialize('auth', 'true', { path: '/', maxAge: 60 * 60 * 24 });
    res.setHeader('Set-Cookie', cookie);
    return res.status(200).json({ message: 'Authenticated' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
};
