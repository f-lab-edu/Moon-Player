import styled from 'styled-components';

import Icon from 'components/Global/style/Icon';
import Button from 'components/Global/style/Button/Button';
import Text from 'components/Global/style/Text';
import Flex from 'components/Global/style/Flex';
import { useLogin } from 'hooks/useLogin';

export const Form = () => {
  const { handleLoginButton } = useLogin();

  return (
    <Root direction="column" justifyContent="center" alignItems="center">
      <StyledButton color="#5c79f1" fontColor="white" onClick={handleLoginButton} data-name="Google">
        <StyledIcon name="Google" />
        <StyledText color="white">Google 로그인</StyledText>
      </StyledButton>
      <StyledButton color="#1cc802" fontColor="white" onClick={handleLoginButton} data-name="Naver">
        <StyledIcon name="Naver" />
        <StyledText color="white">네이버 로그인</StyledText>
      </StyledButton>
      <StyledButton color="#ffeb3b" fontColor="black" onClick={handleLoginButton} data-name="Kakao">
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
