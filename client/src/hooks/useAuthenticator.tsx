import { useEffect } from 'react';
import { removeStoreItems } from 'utils/redux-persist';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from './useAppDispatch';
import useAlarm from './useAlarm';

export const useAuthenticator = () => {
  const navigate = useNavigate();
  const { handleAlarmOpen } = useAlarm();
  const isAuthenticated = useAppSelector((state) => state.user.data.access_token) ? true : false;

  useEffect(() => {
    if (!isAuthenticated) return;
    signIn();
  }, [isAuthenticated]);

  const signIn = () => {
    handleAlarmOpen('로그인 하였습니다.');
    navigate('/music');
  };

  // 로그아웃
  const signOut = () => {
    removeStoreItems();
    handleAlarmOpen('로그아웃 하였습니다.');
  };

  return { isAuthenticated, signIn, signOut };
};
export default useAuthenticator;
