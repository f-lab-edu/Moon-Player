import styled from 'styled-components';
import { useEffect } from 'react';
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
      <Button color="#5c79f1" fontSize="20px" fontColor="white" onClick={handleGoogleLogin}>
        <Icon name="Google" />
        Google 로그인
      </Button>
      <Button fontSize="20px" color="#1cc802" fontColor="white">
        <Icon name="Naver" />
        네이버 로그인
      </Button>
      <Button color="#ffeb3b" fontSize="20px" fontColor="black">
        <Icon name="Kakao" />
        카카오 로그인
      </Button>
    </Root>
  );
};

export default Form;
