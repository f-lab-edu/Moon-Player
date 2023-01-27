import { useEffect } from 'react';
import { removeStoreItems } from 'utils/redux-persist';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from './useReduxStore';

export const useAuthenticator = () => {
  const navigate = useNavigate();

  const isAuthenticated = useAppSelector((state) => state.user.data.access_token) ? true : false;
  useEffect(() => {
    if (!isAuthenticated) return;
    signIn();
  }, [isAuthenticated]);

  const signIn = () => {
    navigate('/music');
  };

  // 로그아웃
  const signOut = () => {
    removeStoreItems();
  };

  return { isAuthenticated, signIn, signOut };
};
export default useAuthenticator;
