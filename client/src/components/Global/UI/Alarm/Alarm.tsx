import styled from 'styled-components';
import { Flex } from '../../style/Flex';
import { Button } from '../../style/Button/Button';
import { Text } from '../../style/Text';
import { Avatar } from '../../style/Avatar';
import useAlarm from 'hooks/useAlarm';

export const Alarm = () => {
  const { isOpen, text, handleClose } = useAlarm();
  return isOpen ? (
    <Overlay data-testid="overlay">
      <Box direction="column" justifyContent="center" alignItems="center">
        <AlarmAvatar img="logo"></AlarmAvatar>
        <AlarmText color="white" textAlign="center" data-testid="alarmText">
          {text}
        </AlarmText>
        <StyledButton fontColor="white" color="gray" onClick={handleClose}>
          확인
        </StyledButton>
      </Box>
    </Overlay>
  ) : (
    <></>
  );
};
const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;

const Box = styled(Flex)`
  position: relative;
  width: 300px;
  height: fit-content;
  padding: 30px;
  background-image: linear-gradient(90deg, #000000 0%, #434343 100%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledButton = styled(Button)`
  width: 50%;
  font-size: 25px;
  border: none;
  padding: 10px;
`;

const AlarmAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
  margin: 50px;
`;

const AlarmText = styled(Text)`
  font-size: 20px;
`;

export default Alarm;
