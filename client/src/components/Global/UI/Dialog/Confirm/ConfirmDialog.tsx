import styled from 'styled-components';
import { Flex } from 'components/Global/style/Flex';
import { Button } from 'components/Global/style/Button/Button';
import Avatar from 'components/Global/style/Avatar';
import { Text } from 'components/Global/style/Text';
import { useContext } from 'react';
import { ConfirmContext } from 'provider/Confirm/ConfirmContext';
import useAuthenticator from 'hooks/useAuthenticator';
import useModal from 'hooks/useModal';
import { ConfirmType } from 'types/app/Confirmdialog';
export const ConfirmDialog = () => {
  const confirmCtx = useContext(ConfirmContext);
  const { signOut } = useAuthenticator();

  const { onOpenAlarm } = useModal();

  const load = () => {
    onOpenAlarm('재생목록을 가져왔습니다.');
    confirmCtx.closeConfirm();
  };
  const Save = () => {
    onOpenAlarm('저장하였습니다.');
    confirmCtx.closeConfirm();
  };

  const handleYesButton = () => {
    const type = confirmCtx.state.type;
    return type === 'Logout' ? signOut() : type === 'Load' ? load() : type === 'Save' ? Save() : alert('잘못된타입');
  };
  return confirmCtx.state.isOpen ? (
    <Layout>
      <Box direction="column" justifyContent="center" alignItems="center">
        <StyledAvatar img="logo"></StyledAvatar>
        <StyledText color="white" textAlign="center">
          {confirmCtx.state.message}
        </StyledText>
        <Flex direction="row" gap="50px">
          <StyledButton fontColor="white" color="gray" onClick={handleYesButton}>
            YES
          </StyledButton>
          <StyledButton fontColor="white" color="gray" onClick={confirmCtx.closeConfirm}>
            NO
          </StyledButton>
        </Flex>
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
  font-size: 20px;
`;
export default ConfirmDialog;
