import styled, { ThemeContext } from 'styled-components';
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuthenticator } from 'hooks/useAuthenticator';
import { fetchUserInfo } from 'store/feature/user/UserSlice';
import { Icon } from 'components/Common/Icon';
import Button from 'components/Common/Button';
import Text from 'components/Common/Text';

import { assignURL } from 'utils/oAuth';
import Flex from 'components/Common/Flex';

const Root = styled(Flex)`
  width: 30vw;
`;
const IconStyle = {
  height: '30px',
  width: '30px',
};
const LongButton = styled(Button)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-top: 20px;
`;

export const Form = () => {
  const theme = useContext(ThemeContext);

  const { signIn, isValid } = useAuthenticator();
  const dispatch = useDispatch();

  // 리다이렉션시 처리
  useEffect(() => {
    dispatch(fetchUserInfo());
    signIn();
  }, [isValid]);
  const handleGoogleLogin = () => assignURL();
  return (
    <Root direction="column" justifyContent="center" alignItems="center">
      <LongButton
        fontSize={theme.fontSizes.base}
        color={theme.colors.lightBlue}
        fontColor={theme.colors.white}
        onClick={handleGoogleLogin}
      >
        <Icon name="Google" style={IconStyle} />
        <Text style={{ margin: 'auto' }} color={theme.colors.white}>
          Google 로그인
        </Text>
      </LongButton>
      <LongButton fontSize={theme.fontSizes.base} color={theme.colors.darkgreen} fontColor={theme.colors.white}>
        <Icon name="Naver" style={IconStyle} />
        <Text style={{ margin: 'auto' }} color={theme.colors.white}>
          네이버 로그인
        </Text>
      </LongButton>
      <LongButton fontSize={theme.fontSizes.base} color={theme.colors.lightyellow} fontColor={theme.colors.black}>
        <Icon name="Kakao" style={IconStyle} />
        <Text style={{ margin: 'auto' }} color={theme.colors.black}>
          카카오 로그인
        </Text>
      </LongButton>
    </Root>
  );
};

export default Form;
