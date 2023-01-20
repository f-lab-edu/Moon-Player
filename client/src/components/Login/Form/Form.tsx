import styled from 'styled-components';

import ImageIcon from 'components/Global/style/ImageIcon';
import Button from 'components/Global/style/Button/Button';
import Text from 'components/Global/style/Text';
import Flex from 'components/Global/style/Flex';
import { useSocialLogin } from 'hooks/useSocialLogin';
import { useEffect, useContext } from 'react';
import { useAuthenticator } from 'hooks/useAuthenticator';
import { DiaLogContext } from 'context/Dialog/index';

export const Form = () => {
  const { handleLoginButton, socialName, onGetCode, getUserToken } = useSocialLogin();
  const { signIn } = useAuthenticator();
  const dialogCtx = useContext(DiaLogContext);

  useEffect(() => {
    const code = onGetCode();
    if (!code) return;
    if (!socialName) return;
    getUserToken({ code, socialName });
    signIn();
    dialogCtx.showAlarm('로그인 하였습니다.');
  }, [socialName]);

  return (
    <Layout direction="column" justifyContent="center" alignItems="center">
      <StyledButton color="#5c79f1" fontColor="white" onClick={handleLoginButton} data-name="Google">
        <SocialLoginIcon name="Google" />
        <StyledText color="white">Google 로그인</StyledText>
      </StyledButton>
      <StyledButton color="#1cc802" fontColor="white" onClick={handleLoginButton} data-name="Naver">
        <SocialLoginIcon name="Naver" />
        <StyledText color="white">네이버 로그인</StyledText>
      </StyledButton>
      <StyledButton color="#ffeb3b" fontColor="black" onClick={handleLoginButton} data-name="Kakao">
        <SocialLoginIcon name="Kakao" />
        <StyledText color="black">카카오 로그인</StyledText>
      </StyledButton>
    </Layout>
  );
};

const Layout = styled(Flex)`
  width: 400px;
`;

const SocialLoginIcon = styled(ImageIcon)`
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
