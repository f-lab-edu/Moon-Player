import styled from 'styled-components';
import { Flex } from 'components/Global/style/Flex';
import Text from 'components/Global/style/Text';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { handlePlayerHeaderUI } from 'store/feature/layout/LayoutSlice';
export const SubHeader = ({ name }) => {
  // hoem 버튼을 누르면 이전 플레이리스트 목록으로 이동해짐

  const dispatch = useAppDispatch();
  const handleHomeButton = () => {
    const header = {
      header: 'main-header',
      name: '나만의 플레이리스트',
    };
    dispatch(handlePlayerHeaderUI(header));
  };
  const handleSaveButton = () => {
    console.log('save button');
  };

  return (
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      <Title>{name}</Title>
      <IconButtonBox direction="row">
        <IconButton name="save" size="2x" color="white" onClick={handleSaveButton} />
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
export default SubHeader;
