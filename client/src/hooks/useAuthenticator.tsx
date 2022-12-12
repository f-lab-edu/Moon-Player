import { useEffect } from 'react';
import { removeStoreItems } from 'utils/persist';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from './useAppDispatch';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { handleAlarm } from 'store/feature/layout/LayoutSlice';

export const useAuthenticator = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.user.accesstoken) ? true : false;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuthenticated) return;
    signIn();
  }, [isAuthenticated]);

  const signIn = () => {
    dispatch(handleAlarm({ isOpen: true, text: '로그인 하였습니다.' }));
    navigate('/music');
  };

  // 로그아웃
  const signOut = () => {
    removeStoreItems();
    dispatch(handleAlarm({ isOpen: true, text: '로그아웃 하였습니다.' }));
  };

  return { isAuthenticated, signIn, signOut };
};
export default useAuthenticator;
