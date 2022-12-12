import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Icon from 'components/Global/Icon';
import Button from 'components/Global/Button';
import Text from 'components/Global/Text';
import Flex from 'components/Global/Flex';
import { assignAuthURL, getCode } from 'utils/auth';
import { useAuthenticator } from 'hooks/useAuthenticator';
import { fetchUserToken, handleLoginInfo } from 'store/feature/user/UserSlice';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';

export const Form = () => {
  const { signIn } = useAuthenticator();

  const dispatch = useAppDispatch();
  const loginInfo = useAppSelector((state) => state.user.info);

  useEffect(() => {
    const code = getCode();
    const info = { code, loginInfo };
    if (!code) return;
    dispatch(fetchUserToken(info));
    signIn();
  }, []);

  const handleGoogleLogin = () => {
    dispatch(handleLoginInfo('Google'));
    assignAuthURL('Google');
  };

  const handleKaKaoLogin = () => {
    dispatch(handleLoginInfo('Kakao'));
    assignAuthURL('Kakao');
  };
  const handleNaverLogin = () => {
    dispatch(handleLoginInfo('Naver'));
    assignAuthURL('Naver');
  };

  return (
    <Root direction="column" justifyContent="center" alignItems="center">
      <StyledButton color="#5c79f1" fontColor="white" onClick={handleGoogleLogin}>
        <StyledIcon name="Google" />
        <StyledText color="white">Google 로그인</StyledText>
      </StyledButton>
      <StyledButton color="#1cc802" fontColor="white" onClick={handleNaverLogin}>
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
