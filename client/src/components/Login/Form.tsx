import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Icon from 'components/Global/Icon';
import Button from 'components/Global/Button';
import Text from 'components/Global/Text';
import Flex from 'components/Global/Flex';
import { assignGoogleAuthURL, getGoogleCode } from 'utils/GoogleLogin';

import { useAuthenticator } from 'hooks/useAuthenticator';
import { fetchGoogleUserInfo } from 'store/feature/user/UserSlice';
import { handleAlarm } from 'store/feature/layout/LayoutSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { assignKaKaoAuthURL } from 'utils/KaKaoLogin';

export const Form = () => {
  const { signIn, isAuthenticated } = useAuthenticator();
  const [LoginInfo, setLoginInfo] = useState('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    // 로그인이 구글에대한것이면 구글로 요청 , 카카오면 카카오로 요청
    const token = getGoogleCode();
    if (!token) return;
    dispatch(fetchGoogleUserInfo(token));
    if (!isAuthenticated) return;
    dispatch(handleAlarm({ isOpen: true, text: '로그인 되었습니다.' }));
    signIn();
  }, []);

  const handleGoogleLogin = () => {
    setLoginInfo('Google');
    assignGoogleAuthURL();
  };

  const handleKaKaoLogin = () => {
    setLoginInfo('KAKAO');
    assignKaKaoAuthURL();
  };

  return (
    <Root direction="column" justifyContent="center" alignItems="center">
      <StyledButton color="#5c79f1" fontColor="white" onClick={handleGoogleLogin}>
        <StyledIcon name="Google" />
        <StyledText color="white">Google 로그인</StyledText>
      </StyledButton>
      <StyledButton color="#1cc802" fontColor="white">
        <StyledIcon name="Naver" />
        <StyledText color="white">네이버 로그인</StyledText>
      </StyledButton>
      <StyledButton color="#ffeb3b" fontColor="black" onClick={handleKaKaoLogin}>
        <StyledIcon name="Kakao" />
        <StyledText color="black">카카오 로그인</StyledText>
      </StyledButton>
    </Root>
  );
};

const Root = styled(Flex)`
  width: 30vw;
`;

const StyledIcon = styled(Icon)`
  width: 30px;
  height: 30px;
`;
const StyledButton = styled(Button)`
  font-size: 20px;
  display: flex;
  width: 100%;
  align-items: center;
  height: 60px;
  border: none;
  width: 100%;

  margin-top: 20px;
  > :nth-child(2) {
    margin: 0 auto;
  }
`;
const StyledText = styled(Text)`
  font-size: 24px;
`;

export default Form;
