import Text from 'components/Global/style/Text';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import Flex from 'components/Global/style/Flex';
import styled from 'styled-components';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { handlePlayerUI, handlePlayerHeaderUI } from 'store/feature/layout/LayoutSlice';
export const MainHeader = ({ ui, name }) => {
  const dispatch = useAppDispatch();

  const handleCustomPlayListUI = () => {
    const header = {
      header: 'main-header',
      name: '나만의 플레이리스트 ',
    };
    dispatch(handlePlayerUI('custom-PlayList'));
    dispatch(handlePlayerHeaderUI(header));
  };
  const handleAdderUI = () => {
    const header = {
      header: 'main-header',
      name: '나만의 플레이리스트 추가',
    };
    dispatch(handlePlayerUI('custom-Adder'));
    dispatch(handlePlayerHeaderUI(header));
  };
  return (
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      <Title>{name}</Title>
      <IconButtonBox direction="row" gap="5px">
        <StyledIconButton
          name="plus"
          size="2x"
          color="white"
          onClick={handleAdderUI}
          active={ui === 'custom-Adder' ? true : false}
        />
        <StyledIconButton
          name="music"
          size="2x"
          color="white"
          onClick={handleCustomPlayListUI}
          active={ui === 'custom-PlayList' ? true : false}
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
