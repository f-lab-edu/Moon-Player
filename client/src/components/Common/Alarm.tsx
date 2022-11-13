import Button from 'components/Common/Button';
import Flex from 'components/Common/Flex';
import styled from 'styled-components';
import { Text } from 'components/Common/Text';
import Avatar from 'components/Common/Avatar';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { handleAlarm } from 'store/feature/layout/LayoutSlice';

export const Alarm = ({ text }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(handleAlarm({ isOpen: false, text: '' }));
  };

  return (
    <Root>
      <Overlay>
        <Box direction="column" justifyContent="center" alignItems="center">
          <Avatar src="images/Loginlogo.png" margin="50px"></Avatar>
          <Text fontSize="25px" color="white" align="center">
            {text}
          </Text>
          <ContentButton onClick={handleClose} width="50%" fontSize="25px" fontColor="white">
            확인
          </ContentButton>
        </Box>
      </Overlay>
    </Root>
  );
};
const Root = ({ children }) => {
  return createPortal(<>{children}</>, document.getElementById('modal'));
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
const ContentButton = styled(Button)`
  border: none;
  margin: 10px;
  background-image: linear-gradient(90deg, #000000 0%, #434343 100%);
`;
export default Alarm;