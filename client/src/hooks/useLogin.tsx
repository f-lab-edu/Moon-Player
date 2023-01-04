import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import { fetchUserToken, handleLoginInfo } from 'store/feature/user/UserSlice';
import { assignAuthURL, getCode } from 'utils/auth';
import { useAuthenticator } from 'hooks/useAuthenticator';

import { useEffect } from 'react';
export const useLogin = () => {
  const dispatch = useAppDispatch();
  const socialName = useAppSelector((state) => state.user.info);
  const { signIn } = useAuthenticator();

  useEffect(() => {
    const code = getCode();
    if (!code) return;
    if (!socialName) return;
    getUserToken({ code, socialName });
    signIn();
  }, [socialName]);

  const getUserToken = (socialInfo) => {
    dispatch(fetchUserToken(socialInfo));
  };
  const handleLoginButton = (e) => {
    const loginName = e.target.closest('button').dataset.name;
    dispatch(handleLoginInfo(loginName));
    assignAuthURL(loginName);
  };

  return { handleLoginButton };
};
