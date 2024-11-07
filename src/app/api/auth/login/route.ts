import { NextRequest, NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(req: NextRequest) {
  const { login, password } = await req.json();

  if (password === process.env.AUTH_PASSWORD && login === process.env.AUTH_LOGIN) {
    const response = NextResponse.json({ message: 'Autenticado com sucesso!' });
    response.headers.set(
      'Set-Cookie',
      serialize('auth', 'true', {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 1 dia
      })
    );
    return response;
  }

  return NextResponse.json({ message: 'Senha incorreta' }, { status: 401 });
}
