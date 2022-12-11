import { useState, useEffect } from 'react';
import { removeStoreItems } from 'utils/persist';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from './useAppDispatch';

export const useAuthenticator = () => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.user.accesstoken);
  const isVerified = token ? true : false;

  const [isAuthenticated, setAuthenticated] = useState(isVerified);

  useEffect(() => {
    if (!isVerified) return;
    setAuthenticated(true);
  }, [isVerified]);

  const signIn = () => {
    setAuthenticated(true);
    navigate('/music');
  };

  // 로그아웃
  const signOut = () => {
    setAuthenticated(false);
    removeStoreItems();
  };

  return { isAuthenticated, signIn, signOut };
};
export default useAuthenticator;
