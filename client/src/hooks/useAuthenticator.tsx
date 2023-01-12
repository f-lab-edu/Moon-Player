import { useEffect } from 'react';
import { removeStoreItems } from 'utils/redux-persist';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from './useAppDispatch';

import { useModal } from './useModal';

export const useAuthenticator = () => {
  const navigate = useNavigate();
  const { onOpenAlarm } = useModal();
  const isAuthenticated = useAppSelector((state) => state.user.data.access_token) ? true : false;

  useEffect(() => {
    if (!isAuthenticated) return;
    signIn();
  }, [isAuthenticated]);

  const signIn = () => {
    onOpenAlarm('로그인 하였습니다.');
    navigate('/music');
  };

  // 로그아웃
  const signOut = () => {
    removeStoreItems();
    onOpenAlarm('로그아웃 하였습니다.');
  };

  return { isAuthenticated, signIn, signOut };
};
export default useAuthenticator;
