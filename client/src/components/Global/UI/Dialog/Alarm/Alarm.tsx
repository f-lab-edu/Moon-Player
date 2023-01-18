import styled from 'styled-components';
import { Flex } from '../../../style/Flex';
import { Button } from '../../../style/Button/Button';
import { Text } from '../../../style/Text';
import { Avatar } from '../../../style/Avatar';
import useModal from 'hooks/useModal';

export const Alarm = () => {
  const { isOpenAlarm, alarmText, onCloseAlarm } = useModal();
  return isOpenAlarm ? (
    <Layout data-testid="overlay">
      <Box direction="column" justifyContent="center" alignItems="center">
        <AlarmAvatar img="logo"></AlarmAvatar>
        <AlarmText color="white" textAlign="center" data-testid="alarmText">
          {alarmText}
        </AlarmText>
        <StyledButton fontColor="white" color="gray" onClick={onCloseAlarm}>
          확인
        </StyledButton>
      </Box>
    </Layout>
  ) : (
    <></>
  );
};
const Layout = styled.div`
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
  font-size: 23px;
`;

export default Alarm;
