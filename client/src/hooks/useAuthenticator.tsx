import { useEffect } from 'react';
import { removeStoreItems } from 'utils/redux-persist';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from './useAppDispatch';
import { useContext } from 'react';
import { AlarmContext } from 'provider/Alarm';
export const useAuthenticator = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.user.data.access_token) ? true : false;
  const alarmCtx = useContext(AlarmContext);
  useEffect(() => {
    if (!isAuthenticated) return;
    signIn();
  }, [isAuthenticated]);

  const signIn = () => {
    alarmCtx.showAlarm('로그인 되었습니다.');
    navigate('/music');
  };

  // 로그아웃
  const signOut = () => {
    removeStoreItems();
    alarmCtx.showAlarm('로그아웃 되었습니다.');
  };

  return { isAuthenticated, signIn, signOut };
};
export default useAuthenticator;
