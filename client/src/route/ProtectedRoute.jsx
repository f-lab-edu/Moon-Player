import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleModal } from 'store/feature/layout/LayoutSlice';

export const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.GoogleUserinfo);

  const isVerified = user.verified_email ? true : false;

  if (!isVerified) {
    dispatch(handleModal({ isOpen: true, text: '로그아웃 되었습니다.' }));
    return <Navigate to="/" replace></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
