import { useEffect } from 'react';
import { removeStoreItems } from 'utils/persist';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from './useAppDispatch';
import useAlarm from './useAlarm';

export const useAuthenticator = () => {
  const navigate = useNavigate();
  const { handleOpen } = useAlarm();
  const isAuthenticated = useAppSelector((state) => state.user.accesstoken) ? true : false;

  useEffect(() => {
    if (!isAuthenticated) return;
    signIn();
  }, [isAuthenticated]);

  const signIn = () => {
    handleOpen('로그인 하였습니다.');
    navigate('/music');
  };

  // 로그아웃
  const signOut = () => {
    removeStoreItems();
    handleOpen('로그아웃 하였습니다.');
  };

  return { isAuthenticated, signIn, signOut };
};
export default useAuthenticator;
