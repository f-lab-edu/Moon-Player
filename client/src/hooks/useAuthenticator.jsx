import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { removeStoreItems } from 'utils/persist';
import { useNavigate } from 'react-router-dom';
export const useAuthenticator = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.info);
  const isVerified = user.verified_email ? true : false;

  const [isAuthenticated, setAuthenticated] = useState(isVerified);

  useEffect(() => {
    if (!isVerified) return;
    setAuthenticated(true);
  }, [isVerified]);

  const signIn = () => {
    setAuthenticated(true);
    navigate('/music');
  };

  // 로그아웃
  const signOut = () => {
    setAuthenticated(false);
    removeStoreItems();
  };

  return { isAuthenticated, signIn, signOut };
};
export default useAuthenticator;
