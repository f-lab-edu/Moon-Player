import { Navigate } from 'react-router-dom';
import { handleAlarm } from 'store/feature/layout/LayoutSlice';
import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import { ReactElement } from 'react';

interface ProtectedRouteProps {
  children: ReactElement;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.accesstoken);
  const isVerified = token ? true : false;

  if (!isVerified) {
    dispatch(handleAlarm({ isOpen: true, text: '로그아웃 되었습니다.' }));
    return <Navigate to="/" replace></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
