import styled from 'styled-components';
import { useModal } from 'hooks/useModal';
import { Flex } from 'components/Global/style/Flex';
import { Button } from 'components/Global/style/Button/Button';
import Avatar from 'components/Global/style/Avatar';
import Text from 'components/Global/style/Text';

export const SaveConfirm = () => {
  const { isOpenConfirm, onCloseConfirmUI, onOpenAlarm } = useModal();
  const handleYesButton = () => {
    onCloseConfirmUI('Save');
    onOpenAlarm('재생목록을 저장했습니다.');
  };
  const handleNoButton = () => {
    onCloseConfirmUI('Save');
  };

  return isOpenConfirm.save.isOpen ? (
    <Layout data-testid="overlay">
      <Box direction="column" justifyContent="center" alignItems="center">
        <StyledAvatar img="logo"></StyledAvatar>
        <Text color="white" textAlign="center">
          저장하시겠습니까?
        </Text>
        <Flex direction="row" gap="50px">
          <StyledButton fontColor="white" color="gray" onClick={handleYesButton}>
            YES
          </StyledButton>
          <StyledButton fontColor="white" color="gray" onClick={handleNoButton}>
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
  z-index: 9996;
  h3 {
    font-size: 20px;
  }
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
export default SaveConfirm;
