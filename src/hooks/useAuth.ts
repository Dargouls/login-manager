'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
/**
 * @description `Ciclo para refresh:` chama a função verifyRefreshToken. Ela vai gerar um novo refreshToken ou logout caso o token esteja expirado.
 *
 */

const useAuth = () => {
  const router = useRouter();
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);

  async function _login({ email, password }: any) {
    if (!email || !password) return;
    console.log('fetch');
    setIsLoadingLogin(true);
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => {
        console.log(response);
        toast.success('Login efetuado com sucesso');
        router.push(process.env.SYSTEM_URL || '/');
        setIsLoadingLogin(false);

        // window.location.reload();
      })
      .catch(error => {
        console.log(error);
        toast.error('Não foi possível fazer login');
        setIsLoadingLogin(false);
      });
  }

  // async function _createAccount({ name, email, password }: any) {
  // 	if (!name || !email || !password) return;
  // 	const response = await api.post('/create-account', { name, email, password });
  // 	if (response?.data?.tokens?.accessToken || response?.data?.tokens?.refreshToken) {
  // 		Cookies.set('counthours_access_token', response?.data.tokens.accessToken, {
  // 			path: '/',
  // 			// secure: true,
  // 			sameSite: 'strict',
  // 		});
  // 		Cookies.set('counthours_refresh_token', response?.data.tokens.refreshToken, {
  // 			path: '/',
  // 			// secure: true,
  // 			sameSite: 'strict',
  // 		});
  // 		window.location.reload();
  // 	}
  // 	return response?.data;
  // }

  // async function _logout() {
  // 	Cookies.remove('counthours_access_token');
  // 	Cookies.remove('counthours_refresh_token');

  // 	window.location.href = '/';
  // }

  // function getAccessToken() {
  // 	const accessToken = Cookies.get('counthours_access_token');
  // 	return accessToken;
  // }

  // function getUser() {
  // 	const accessToken = Cookies.get('counthours_access_token');
  // 	if (!accessToken) return;
  // 	const user = jwt_decode.jwtDecode<IPayloadTokens>(accessToken || '');
  // 	const userInfo = {
  // 		id: user.id,
  // 		login: user.login,
  // 		name: user.name,
  // 		refreshToken: getRefreshToken(),
  // 	};
  // 	return userInfo;
  // }

  return {
    _login,
    isLoadingLogin,
  };
};
export default useAuth;
