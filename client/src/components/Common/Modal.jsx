import Button from 'components/Common/Button';
import ContentBox from 'components/Common/Flex';
import styled from 'styled-components';
import { Text } from 'components/Common/Text';
import Avatar from 'components/Common/Avatar';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { handleModal } from 'store/feature/layout/LayoutSlice';

export const Modal = ({ text }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(handleModal({ isOpen: false, text: '' }));
  };

  return (
    <Root>
      <Overlay>
        <ModalBox>
          <ContentBox direction="column" justifyContent="center" alignItems="center">
            <Avatar src="images/Loginlogo.png" margin="50px"></Avatar>
            <Text fontSize="25px" color="white">
              {text}
            </Text>
            <ContentButton onClick={handleClose} width="50%" fontSize="25px" fontColor="white">
              확인
            </ContentButton>
          </ContentBox>
        </ModalBox>
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

const ModalBox = styled.div`
  position: relative;
  width: 300px;
  height: fit-content;
  border-radius: 15px;
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
export default Modal;
