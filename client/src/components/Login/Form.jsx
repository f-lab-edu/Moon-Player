import styled, { ThemeContext } from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { Icon } from 'components/Common/Icon';
import Button from 'components/Common/Button';
import Text from 'components/Common/Text';

import { assignURL } from 'utils/oAuth';
import Flex from 'components/Common/Flex';
import { useDispatch } from 'react-redux';
import { useAuthenticator } from 'hooks/useAuthenticator';
import { fetchUserInfo } from 'store/feature/user/UserSlice';
import { handleAlarm } from 'store/feature/layout/LayoutSlice';

export const Form = () => {
  const theme = useContext(ThemeContext);
  const { signIn, isAuthenticated } = useAuthenticator();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
    if (!isAuthenticated) return;
    dispatch(handleAlarm({ isOpen: true, text: '로그인 되었습니다.' }));
    signIn();
  }, [isAuthenticated]);
  const handleGoogleLogin = () => {
    assignURL();
  };

  return (
    <Root direction="column" justifyContent="center" alignItems="center">
      <LongButton
        fontSize={theme.fontSizes.base}
        color={theme.colors.lightBlue}
        fontColor={theme.colors.white}
        onClick={handleGoogleLogin}
      >
        <Icon name="Google" />
        <Text color={theme.colors.white} shadow="0px">
          Google 로그인
        </Text>
      </LongButton>
      <LongButton fontSize={theme.fontSizes.base} color={theme.colors.darkgreen} fontColor={theme.colors.white}>
        <Icon name="Naver" />
        <Text shadow="0" color={theme.colors.white}>
          네이버 로그인
        </Text>
      </LongButton>
      <LongButton fontSize={theme.fontSizes.base} color={theme.colors.lightyellow} fontColor={theme.colors.black}>
        <Icon name="Kakao" />
        <Text shadow="0" color={theme.colors.black}>
          카카오 로그인
        </Text>
      </LongButton>
    </Root>
  );
};

const Root = styled(Flex)`
  width: 30vw;
`;

const LongButton = styled(Button)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  border: none;
  margin-top: 20px;
  > :nth-child(2) {
    margin: 0 auto;
  }
`;

export default Form;
