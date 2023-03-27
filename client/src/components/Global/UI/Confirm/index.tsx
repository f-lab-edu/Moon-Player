import styled from 'styled-components';
import { Flex } from 'components/Global/style/Flex';
import { Button } from 'components/Global/style/Button/Button';
import Avatar from 'components/Global/style/Avatar';
import Text from 'components/Global/style/Text';
import { useState } from 'react';

const useConfirmDialog = () => {
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClose: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onConfirm: () => {},
  });

  return {
    confirmDialog,
    setConfirmDialog,
  };
};

/**
  setConfirmDialog((p) => ({
    ...p,
    isOpen: true,
    title: '재생목록을 가져왔습니다.',
    onClose: (p) => p.isOpen = false, 
  }));
 */


// setConfirmDialog((p) => ({
//   ...p,
//   isOpen: true,
//   title: '재생목록을 가져올까요?',
//   onConfirm: () => {
//     // 재생목록 가져오기..
//     setConfirmDialog((p) => ({
//       ...p,
//       title: '재생목록을 가져왔습니다.',
//       onClose: () => {
//         setConfirmDialog((p) => ({ ...p, isOpen: false }));
//       },
//     }));
//   },
//   onClose: () => {
//     setConfirmDialog((p) => ({ ...p, isOpen: false }));
//   },
// }));

export const LoadConfirm = () => {
  const {
    confirmDialog: { isOpen, title, onClose, onConfirm },
  } = useConfirmDialog();

  return isOpen ? (
    <Layout data-testid="overlay">
      <Box direction="column" justifyContent="center" alignItems="center">
        <StyledAvatar img="logo"></StyledAvatar>
        <StyledText color="white" textAlign="center">
          {title}
        </StyledText>
        <Flex direction="row" gap="50px">
          <StyledButton fontColor="white" color="gray" onClick={onConfirm}>
            YES
          </StyledButton>
          <StyledButton fontColor="white" color="gray" onClick={onClose}>
            NO
          </StyledButton>
        </Flex>
      </Box>
    </Layout>
  ) : null;
};

const Layout = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9996;
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
  font-size: 20px;
  padding: 10px;
  border: none;
`;
const StyledAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
  margin: 50px;
`;
const StyledText = styled(Text)`
  font-size: 23px;
`;
export default LoadConfirm;
