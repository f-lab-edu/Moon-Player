import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleRemoveUserinfo } from 'store/feature/user/UserSlice';
// 인증 여부에 필요한 로직만 넣어라
// 커스텀 훅에 매개변수 전달해서 사용하는 방법 적절한가? , useSelector를 써도되나

export const useAuthenticator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.info);
  const isValid = user.verified_email ? true : false;

  const [isSignedIn, setIsSignedIn] = useState(isValid);
  useEffect(() => {
    if (!isValid) return;
    setIsSignedIn(true);
  }, [user]);

  const signIn = () => {
    // 로그인
    if (!isSignedIn) return;
    alert('로그인에 성공하였습니다 !');
    navigate('/music');
  };

  // 로그아웃
  const signOut = () => {
    alert('정상적으로 로그아웃 되었습니다.');
    setIsSignedIn(false);
    dispatch(handleRemoveUserinfo());
    navigate('/');
  };

  return { isSignedIn, signIn, signOut };
};
