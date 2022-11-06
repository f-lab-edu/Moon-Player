import styled from 'styled-components';
import Text from 'components/Common/Text';
import Button from 'components/Common/Button';
import { useRef } from 'react';
import { Nav } from './Nav';
import Flex from 'components/Common/Flex';
const Root = styled(Flex)``;
const Box = styled.div`
  margin: 0 auto;
`;
const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  margin-bottom: 20px;
`;
const ContentText = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
  margin-top: 10px;
`;

const TextArea = styled.textarea`
  width: 600px;
  height: 400px;
  font-size: 20px;
  resize: none;
`;
export const Report = () => {
  const text = useRef();

  const handleSubmit = () => {
    console.log(text.current.value);
    // 내 이메일로 전송하는 코드 입력
  };

  return (
    <Root direction="row">
      <Nav></Nav>
      <Box>
        <Flex direction="column" justifyContent="center">
          <Title>버그리포트</Title>
          <ContentText> 이용중에 발견하신 기능상의 오류 혹은 불편한점들 </ContentText>
          <ContentText> 추가적으로 필요한 기능들을 500자 이내로 입력해주세요. </ContentText>
          <ContentText> 여러분의 쾌적한 이용을 위해 오류 개선에 최선을 다하겠습니다. </ContentText>
        </Flex>
        <TextArea ref={text} placeholder="500자 이내로 적어주세요" maxLength={500}></TextArea>
        <Button onClick={handleSubmit}>제출</Button>
      </Box>
    </Root>
  );
};

export default Report;
