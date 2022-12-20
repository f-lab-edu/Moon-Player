import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { handleAlarm } from 'store/feature/layout/LayoutSlice';
import { ReactNode } from 'react';
import { Flex } from './Flex';
import { Button } from './Button';
import { Text } from './Text';
import { Avatar } from './Avatar';
import { useAppDispatch } from 'hooks/useAppDispatch';

interface AlarmProps {
  text: string;
}

export const Alarm = ({ text }: AlarmProps) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(handleAlarm({ isOpen: false, text: '' }));
  };

  return (
    <>
      <Overlay>
        <Box direction="column" justifyContent="center" alignItems="center">
          <AlarmAvatar img="logo"></AlarmAvatar>
          <AlarmText color="white" textAlign="center">
            {text}
          </AlarmText>
          <StyledButton fontColor="white" color="gray" onClick={handleClose}>
            확인
          </StyledButton>
        </Box>
      </Overlay>
    </>
  );
};

interface RootProps {
  children: ReactNode;
}
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
