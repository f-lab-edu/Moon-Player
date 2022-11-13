import styled from 'styled-components';
import Flex from 'components/Common/Flex';
import Nav from 'components/User/Nav';
import Text from 'components/Common/Text';
import Button from 'components/Common/Button';
import { useRef } from 'react';

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
const UserPage = () => {
  const text = useRef();
  const handleSubmit = () => {
    console.log(text.current.value);
    // 내 이메일로 전송하는 코드 입력
  };
  return (
    <Root direction="row">
      <Nav />
      <ContentBox direction="column" alignItems="center" justifyContent="center">
        <Text color="red" fontSize="40px">
          버그리포트
        </Text>
        <Text color="black"> 이용중에 발견하신 기능상의 오류 혹은 불편한점들 </Text>
        <Text color="black"> 추가적으로 필요한 기능들을 500자 이내로 입력해주세요. </Text>
        <Text color="black"> 여러분의 쾌적한 이용을 위해 오류 개선에 최선을 다하겠습니다. </Text>
        <TextArea ref={text} placeholder="500자 이내로 적어주세요" maxLength={500}></TextArea>
        <Button
          onClick={handleSubmit}
          width="100%"
          height="100px"
          color="black"
          fontColor="white"
          fontSize="25px"
          margin="10px"
        >
          제출
        </Button>
      </ContentBox>
    </Root>
  );
};
export default UserPage;
