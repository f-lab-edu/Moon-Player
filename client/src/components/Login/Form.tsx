import styled, { ThemeContext } from 'styled-components';
import { useEffect, useContext } from 'react';

import { Icon } from 'components/Common/UI/Icon';
import Button from 'components/Common/UI/Button';
import Text from 'components/Common/UI/Text';

import { assignURL, getToken } from 'utils/oAuth';
import Flex from 'components/Common/UI/Flex';

import { useAuthenticator } from 'hooks/useAuthenticator';
import { fetchUserInfo } from 'store/feature/user/UserSlice';
import { handleAlarm } from 'store/feature/layout/LayoutSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';

export const Form = () => {
  const { signIn, isAuthenticated } = useAuthenticator();
  const theme = useContext(ThemeContext);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getToken();
    if (!token) return;
    dispatch(fetchUserInfo(token));
    if (!isAuthenticated) return;
    dispatch(handleAlarm({ isOpen: true, text: '로그인 되었습니다.' }));
    signIn();
  }, [isAuthenticated]);
  const handleGoogleLogin = () => {
    assignURL();
  };

  return (
    <Root direction="column" justifyContent="center" alignItems="center">
      <StyledButton color={theme.colors.lightBlue} fontColor={theme.colors.white} onClick={handleGoogleLogin}>
        <StyledIcon name="Google" />
        <StyledText color={theme.colors.white}>Google 로그인</StyledText>
      </StyledButton>
      <StyledButton color={theme.colors.darkgreen} fontColor={theme.colors.white}>
        <StyledIcon name="Naver" />
        <StyledText color={theme.colors.white}>네이버 로그인</StyledText>
      </StyledButton>
      <StyledButton color={theme.colors.lightyellow} fontColor={theme.colors.black}>
        <StyledIcon name="Kakao" />
        <StyledText color={theme.colors.black}>카카오 로그인</StyledText>
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
  font-size: ${({ theme }) => theme.fontSize.m};
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
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export default Form;
