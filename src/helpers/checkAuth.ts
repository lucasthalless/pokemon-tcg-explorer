import { parse } from 'cookie';

export const checkAuth = () => {
  const authCookie = parse('auth');

  console.log(authCookie);
  

  return !!authCookie;
};
