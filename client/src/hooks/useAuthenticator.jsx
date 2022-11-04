import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// 인증 여부에 필요한 로직만 넣어라
// 커스텀 훅에 매개변수 전달해서 사용하는 방법 적절한가? , useSelector를 써도되나

export const useAuthenticator = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.info);
  const isValid = user.verified_email ? true : false;
  const signIn = () => {
    // 로그인
    if (!isValid) return;
    alert('로그인에 성공하였습니다 !');
    navigate('/music');
  };

  // 로그아웃
  const signOut = () => {
    navigate('/');
    alert('로그아웃 하였습니다.');
  };

  return { isValid, signIn, signOut };
};
