import Text from 'components/Global/style/Text';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import Flex from 'components/Global/style/Flex';
import styled from 'styled-components';
import { useMusicPageUIControl } from 'hooks/useMusicPageUIControl';

export const MainHeader = ({ title }) => {
  const { isOpenAddMusicListUI, onhandleOpenAddPlayListUI } = useMusicPageUIControl();

  return (
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      <Title>{title}</Title>
      <IconButtonBox direction="row" gap="5px">
        <StyledIconButton
          name="plus"
          size="2x"
          color="white"
          onClick={() => {
            onhandleOpenAddPlayListUI(true);
          }}
          active={isOpenAddMusicListUI ? true : false}
        />
        <StyledIconButton
          name="music"
          size="2x"
          color="white"
          onClick={() => {
            onhandleOpenAddPlayListUI(false);
          }}
          active={!isOpenAddMusicListUI ? true : false}
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
const StyledIconButton = styled(IconButton)`
  opacity: ${(props) => (props.active ? 1 : 0.3)};
`;
const IconButtonBox = styled(Flex)`
  margin: 10px;
`;
export default MainHeader;
