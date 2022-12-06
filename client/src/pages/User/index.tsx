import styled from 'styled-components';
import Flex from 'components/Global/Flex';
import Nav from 'components/User/Nav';
import Text from 'components/Global/Text';
import Button from 'components/Global/Button';
import { useRef } from 'react';
const UserPage = () => {
  const text = useRef<HTMLTextAreaElement>(null);
  const handleSubmit = () => {
    // 내 이메일로 전송하는 코드 입력
  };
  return (
    <Root direction="row">
      <Nav />
      <ContentBox direction="column" alignItems="center" justifyContent="center">
        <Title color="red">버그리포트</Title>
        <StyledText>이용중에 발견하신 기능상의 오류 혹은 불편한점들</StyledText>
        <StyledText>추가적으로 필요한 기능들을 500자 이내로 입력해주세요.</StyledText>
        <StyledText>여러분의 쾌적한 이용을 위해 오류 개선에 최선을 다하겠습니다</StyledText>
        <TextArea ref={text} placeholder="500자 이내로 적어주세요" maxLength={500}></TextArea>
        <StyledButton fontColor="white" onClick={handleSubmit}>
          제출
        </StyledButton>
      </ContentBox>
    </Root>
  );
};
const Root = styled(Flex)`
  height: 100vh;
`;

const ContentBox = styled(Flex)`
  margin: 0 auto;
`;

const TextArea = styled.textarea`
  width: 600px;
  height: 500px;
  font-size: 20px;
  resize: none;
`;
const StyledButton = styled(Button)`
  width: 100%;
  height: 100px;
  font-size: 25px;
  margin: 10px;
`;
const StyledText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.m};
`;
const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.title};
`;
export default UserPage;
