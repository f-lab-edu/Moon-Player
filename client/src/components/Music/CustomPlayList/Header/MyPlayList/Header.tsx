import styled from 'styled-components';
import { Flex } from 'components/Global/style/Flex';
import Text from 'components/Global/style/Text';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import { useContext } from 'react';
import { DiaLogContext } from 'context/Dialog/index';

export const MyPlayListHeader = ({ onUIhandle }) => {
  const dialogCtx = useContext(DiaLogContext);
  const handleHomeButton = () => {
    onUIhandle();
  };
  const handleSpinnerButton = () => {
    dialogCtx.showConfirm('재생목록을 가져 오겠습니까?', 'Load');
  };

  return (
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      <Title>나만의 플레이리스트</Title>
      <IconButtonBox direction="row">
        <IconButton name="spinner" size="2x" color="white" onClick={handleSpinnerButton} />
        <IconButton name="home" size="2x" color="white" onClick={handleHomeButton} />
      </IconButtonBox>
    </Layout>
  );
};
const Layout = styled(Flex)`
  margin: 15px;
`;
const Title = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.64);
`;
const IconButtonBox = styled(Flex)`
  margin: 10px;
`;
export default MyPlayListHeader;
