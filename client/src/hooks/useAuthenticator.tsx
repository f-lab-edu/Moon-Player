import { useEffect } from 'react';
import { removeStoreItems } from 'utils/redux-persist';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from './useAppDispatch';

import { useUIControl } from './useUIControl';

export const useAuthenticator = () => {
  const navigate = useNavigate();
  const { onOpenAlarm } = useUIControl();
  const isAuthenticated = useAppSelector((state) => state.user.data.access_token) ? true : false;

  useEffect(() => {
    if (!isAuthenticated) return;
    signIn();
  }, [isAuthenticated]);

  const signIn = () => {
    onOpenAlarm('로그인 되었습니다.');
    navigate('/music');
  };

  // 로그아웃
  const signOut = () => {
    removeStoreItems();
    onOpenAlarm('로그아웃 되었습니다.');
  };

  return { isAuthenticated, signIn, signOut };
};
export default useAuthenticator;
