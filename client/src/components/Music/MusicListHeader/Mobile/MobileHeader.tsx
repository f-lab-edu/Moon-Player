import styled from 'styled-components';
import { Flex } from 'components/Global/style/Flex';
import Text from 'components/Global/style/Text';
import { useMusicPageUIControl } from 'hooks/useMusicPageUIControl';
//  header에 버튼을 눌렀을때 List가 렌더링되게 구현한다.
export const MobileHeader = () => {
  const { onhandleOpenPlayerListUI, onhandleOpenMusicListUI } = useMusicPageUIControl();

  const handleMusicListUI = () => {
    onhandleOpenMusicListUI(true);
    onhandleOpenPlayerListUI(false);
    return;
  };
  const handlePlayerListUI = () => {
    onhandleOpenPlayerListUI(true);
    onhandleOpenMusicListUI(false);
    return;
  };

  return (
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      <Title onClick={handleMusicListUI}>M U S I C L I S T</Title>
      <Title onClick={handlePlayerListUI}>P L A Y E R L I S T</Title>
    </Layout>
  );
};

const Layout = styled(Flex)`
  margin: 0 auto;
  margin-bottom: 10px;
  padding-bottom: 15px;
`;

const Title = styled(Text)`
  font-size: 16px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 15px;
  color: rgba(255, 255, 255, 0.64);

  padding-left: 10px;
  font-weight: normal;
`;
export default MobileHeader;
