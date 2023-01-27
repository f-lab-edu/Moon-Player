import styled from 'styled-components';
import { Flex } from 'components/Global/style/Flex';
import { Button } from 'components/Global/style/Button/Button';
import Avatar from 'components/Global/style/Avatar';
import { Text } from 'components/Global/style/Text';
import { useContext } from 'react';
import { DiaLogContext } from 'context/Dialog/index';
import { useAuthenticator } from 'hooks/useAuthenticator';
export const ConfirmDialog = () => {
  const dialogCtx = useContext(DiaLogContext);
  const { signOut } = useAuthenticator();
  const confirm = dialogCtx.state.confirm;
  // confirm 타입에 맞게 함수를 실행시켜준다
  const handleYesButton = () => {
    dialogCtx.closeConfirm();
    const confirmType = confirm.type;
    if (confirmType === '') return;
    return confirmType === 'Logout' ? handleLogout() : confirmType === 'Load' ? handleLoadMusic() : handleSaveMusic();
  };
  const handleNoButton = () => {
    dialogCtx.closeConfirm();
  };

  const handleLogout = () => {
    signOut();
  };

  const handleLoadMusic = () => {
    console.log('load');
  };
  const handleSaveMusic = () => {
    console.log('save');
  };

  return confirm.isOpen ? (
    <Layout>
      <FlexBox direction="column" justifyContent="center" alignItems="center">
        <StyledAvatar img="logo"></StyledAvatar>
        <StyledText color="white" textAlign="center">
          {confirm.message}
        </StyledText>
        <Flex direction="row" gap="50px">
          <StyledButton fontColor="white" color="gray" onClick={handleYesButton}>
            YES
          </StyledButton>
          <StyledButton fontColor="white" color="gray" onClick={handleNoButton}>
            NO
          </StyledButton>
        </Flex>
      </FlexBox>
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
const FlexBox = styled(Flex)`
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
