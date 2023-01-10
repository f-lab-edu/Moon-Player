import styled from 'styled-components';
import IconButton from 'components/Global/UI/IconButton/IconButton';

import Flex from 'components/Global/style/Flex';
import Button from 'components/Global/style/Button/Button';
import { Text } from 'components/Global/style/Text';

export const Adder = ({ onClose }) => {
  return (
    <Overlay>
      <Box>
        <CloseButton onClick={onClose} name="close" color="white" size="2x" />
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Title>나만의 플레이리스트</Title>
          <Flex direction="row" justifyContent="space-between" alignItems="center">
            <Flex direction="row" alignItems="center" gap="9px">
              <InputTitle>이름</InputTitle>
              <InputBox />
            </Flex>
            <SaveButton>저장</SaveButton>
          </Flex>
        </Flex>
      </Box>
    </Overlay>
  );
};
export default Adder;
const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;
const Box = styled.div`
  position: relative;
  width: 380px;
  height: fit-content;
  padding: 30px;
  background: linear-gradient(
    333deg,
    rgba(12, 12, 56, 1) 0%,
    rgba(45, 34, 76, 1) 36%,
    rgba(36, 18, 95, 1) 73%,
    rgba(38, 64, 92, 1) 100%
  );

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
`;
const SaveButton = styled(Button)`
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
const Title = styled(Text)`
  font-size: 25px;
`;
const InputTitle = styled(Text)`
  font-size: 17px;
  width: 40px;
  padding: 5px;
`;
