import Button from 'components/Global/style/Button/Button';
import Flex from 'components/Global/style/Flex';
import styled from 'styled-components';
import { Text } from 'components/Global/style/Text';

export const Header = () => {
  return (
    <Layout direction="column" justifyContent="center" alignItems="center">
      <Title>내 재생 목록</Title>
      <Box direction="row" justifyContent="space-between" alignItems="center">
        <Flex direction="row" alignItems="center" gap="9px">
          <Name>이름</Name>
          <InputBox />
        </Flex>
        <HeaderButton>저장</HeaderButton>
      </Box>
    </Layout>
  );
};

const Layout = styled(Flex)``;

const Title = styled(Text)`
  font-size: 25px;
`;

const Box = styled(Flex)`
  gap: 20px;
`;
const Name = styled(Text)`
  font-size: 17px;
  width: 40px;
  padding: 5px;
`;
const HeaderButton = styled(Button)`
  color: white;
  background-color: black;
  border: none;
  font-size: 16px;
  width: 50px;
  height: 30px;
  border-radius: 7px;
`;

const InputBox = styled.input`
  width: 230px;
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 7px;
  padding: 5px;
`;

export default Header;
