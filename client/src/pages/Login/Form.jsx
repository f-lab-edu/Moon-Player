import styled, { ThemeContext } from 'styled-components';
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { assignURL } from 'utils/locationAPI';
import { useAuthenticator } from 'hooks/useAuthenticator';
import { fetchUserInfo } from 'store/feature/user/UserSlice';
import FlexCenterColumn from 'components/Common/FlexCenterColumn';

import { Icon } from 'components/Common/Icon';
import Button from 'components/Common/LongButton';

const Root = styled(FlexCenterColumn)`
  width: 30vw;
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
    <Root>
      <Button color={theme.colors.lightBlue} fontColor={theme.colors.white} onClick={handleGoogleLogin}>
        <Icon name="Google" />
        Google 로그인
      </Button>
      <Button color={theme.colors.darkgreen} fontColor={theme.colors.white}>
        <Icon name="Naver" />
        네이버 로그인
      </Button>
      <Button color={theme.colors.lightyellow} fontColor={theme.colors.black}>
        <Icon name="Kakao" />
        카카오 로그인
      </Button>
    </Root>
  );
};

export default Form;
