import styled from 'styled-components';
import { useEffect } from 'react';
import { Icon } from 'components/Common/Icon';
import Button from 'components/Common/Button';
import Text from 'components/Common/Text';

import { assignURL } from 'utils/oAuth';
import Flex from 'components/Common/Flex';

import { useAuthenticator } from 'hooks/useAuthenticator';
import { fetchUserInfo } from 'store/feature/user/UserSlice';
import { handleAlarm } from 'store/feature/layout/LayoutSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';

export const Form = () => {
  const { signIn, isAuthenticated } = useAuthenticator();

  const dispatch = useAppDispatch();

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
      <LongButton fontSize="20px" color="#5c79f1" fontColor="white" onClick={handleGoogleLogin}>
        <Icon name="Google" width="30px" height="30px" />
        <Text fontSize="20px" color="white">
          Google 로그인
        </Text>
      </LongButton>
      <LongButton fontSize="20px" color="#1cc802" fontColor="white">
        <Icon name="Naver" width="30px" height="30px" />
        <Text fontSize="20px" color="white">
          네이버 로그인
        </Text>
      </LongButton>
      <LongButton fontSize="20px" color="#ffeb3b" fontColor="black">
        <Icon name="Kakao" width="30px" height="30px" />
        <Text fontSize="20px" color="black">
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

export default Form;
