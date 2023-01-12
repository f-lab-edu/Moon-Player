import Text from 'components/Global/style/Text';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import Flex from 'components/Global/style/Flex';
import styled from 'styled-components';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { handlePlayerUIState } from 'store/feature/layout/LayoutSlice';
export const MainHeader = ({ name, title }) => {
  const dispatch = useAppDispatch();
  const handleCustomPlayListUI = () => {
    const ui = {
      isOpen: true,
      ui: 'custom-PlayList',
      title: 'MY PlayList',
      header: 'main-header',
    };
    dispatch(handlePlayerUIState(ui));
  };
  const handleAdderUI = () => {
    const ui = {
      isOpen: true,
      ui: 'custom-Adder',
      title: 'ADD PlayList',
      header: 'main-header',
    };
    dispatch(handlePlayerUIState(ui));
  };
  const handlePlayListUI = () => {
    const ui = {
      isOpen: true,
      ui: 'main',
      title: 'PlayList',
      header: 'main-header',
    };
    dispatch(handlePlayerUIState(ui));
  };

  return (
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      <Title>{title}</Title>
      <IconButtonBox direction="row" gap="5px">
        <StyledIconButton
          name="plus"
          size="2x"
          color="white"
          onClick={handleAdderUI}
          active={name === 'custom-Adder' ? true : false}
        />
        <StyledIconButton
          name="music"
          size="2x"
          color="white"
          onClick={handleCustomPlayListUI}
          active={name === 'custom-PlayList' ? true : false}
        />
        <StyledIconButton
          name="list"
          size="2x"
          color="white"
          onClick={handlePlayListUI}
          active={name === 'main' ? true : false}
        />
      </IconButtonBox>
    </Layout>
  );
};
export default MainHeader;
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
