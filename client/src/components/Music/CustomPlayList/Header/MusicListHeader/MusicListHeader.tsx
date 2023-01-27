import styled from 'styled-components';
import { Flex } from 'components/Global/style/Flex';
import Text from 'components/Global/style/Text';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import { useContext } from 'react';
import { DiaLogContext } from 'context/Dialog/index';
import useMusicPageUIControl from 'hooks/useMusicPageUIControl';

export const MusicListHeader = ({ title }) => {
  const dialogCtx = useContext(DiaLogContext);
  const { onhandleMyPlayListOptionUI } = useMusicPageUIControl();
  const handleSpinnerButton = () => {
    dialogCtx.showConfirm('Load');
  };

  return (
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      <Title>{title}</Title>
      <IconButtonBox direction="row">
        <IconButton name="spinner" size="2x" color="white" onClick={handleSpinnerButton} />
        <IconButton
          name="home"
          size="2x"
          color="white"
          onClick={() => {
            onhandleMyPlayListOptionUI(true);
          }}
        />
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
export default MusicListHeader;
