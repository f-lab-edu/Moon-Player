import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { removeStoreItems } from 'utils/persist';
export const useAuthenticator = () => {
  const user = useSelector((state) => state.user.info);
  const isVerified = user.verified_email ? true : false;
  const [isAuthenticated, setAuthenticated] = useState(isVerified);

  useEffect(() => {
    if (!isVerified) return;
    setAuthenticated(true);
  }, [isVerified]);

  const signIn = () => {
    setAuthenticated(true);
    alert('로그인에 성공하였습니다 !');
  };

  // 로그아웃
  const signOut = () => {
    setAuthenticated(false);
    alert('로그아웃 하였습니다.');
    removeStoreItems();
  };

  return { isAuthenticated, signIn, signOut };
};
export default useAuthenticator;
