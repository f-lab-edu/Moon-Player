import styled from 'styled-components';
import IconButton from 'components/Global/UI/IconButton/IconButton';

import Flex from 'components/Global/style/Flex';
import Button from 'components/Global/style/Button/Button';
import { Text } from 'components/Global/style/Text';

export const Adder = () => {
  return (
    <Layout direction="column" justifyContent="center" alignItems="center">
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Flex direction="row" alignItems="center" gap="15px">
          <InputTitle>이름</InputTitle>
          <InputBox />
        </Flex>
        <SaveButton>저장</SaveButton>
      </Flex>
    </Layout>
  );
};
export default Adder;
const Layout = styled(Flex)``;
const SaveButton = styled(Button)`
  color: black;
  background-color: white;
  border: none;
  font-size: 16px;
  width: 50px;
  height: 30px;
  border-radius: 7px;
  margin: 10px;
`;
const InputBox = styled.input`
  width: 230px;
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 7px;
  padding: 5px;
`;

const InputTitle = styled(Text)`
  font-size: 17px;
  width: 40px;
  padding: 5px;
`;
