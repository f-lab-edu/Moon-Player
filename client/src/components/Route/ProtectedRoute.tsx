import { ReactElement } from 'react';
import { useAuthenticator } from 'hooks/useAuthenticator';
import { Navigate } from 'react-router-dom';
interface ProtectedRouteProps {
  children: ReactElement;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuthenticator();
  if (!isAuthenticated) {
    return <Navigate to="/" replace></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
