import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.info);
  const isVerified = user.verified_email ? true : false;

  if (!isVerified) {
    return <Navigate to="/" replace></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
