import styled from 'styled-components';
import { Flex } from 'components/Global/style/Flex';
import { Button } from 'components/Global/style/Button/Button';
import Avatar from 'components/Global/style/Avatar';
import Text from 'components/Global/style/Text';
import { useModal } from 'hooks/useModal';
export const LoadConfirm = () => {
  const { isOpenConfirm, onCloseConfirmUI, onOpenAlarm } = useModal();
  const handleYesButton = () => {
    onCloseConfirmUI('Load');
    onOpenAlarm('재생목록을 가져왔습니다.');
  };
  const handleNoButton = () => {
    onCloseConfirmUI('Load');
  };
  return isOpenConfirm.load.isOpen ? (
    <Layout data-testid="overlay">
      <Box direction="column" justifyContent="center" alignItems="center">
        <StyledAvatar img="logo"></StyledAvatar>
        <StyledText color="white" textAlign="center">
          재생목록을 가져오시겠습니까?
        </StyledText>
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
