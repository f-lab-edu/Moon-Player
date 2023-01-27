import styled from 'styled-components';
import { Flex } from 'components/Global/style/Flex';
import Text from 'components/Global/style/Text';
import { useMusicPageUIControl } from 'hooks/useMusicPageUIControl';

// Mobile화면일떄 보여주는 헤더
// 헤더를 누르면 해당화면을 보여줘야한다.
export const MobileHeader = () => {
  const { onhandleMusicListUI, isOpenMusicList } = useMusicPageUIControl();

  return (
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      <Title
        active={isOpenMusicList}
        onClick={() => {
          onhandleMusicListUI(true);
        }}
      >
        M U S I C L I S T
      </Title>
      <Title
        active={!isOpenMusicList}
        onClick={() => {
          onhandleMusicListUI(false);
        }}
      >
        P L A Y L I S T
      </Title>
    </Layout>
  );
};
const Layout = styled(Flex)`
  margin: 0 auto;
  margin-bottom: 10px;
  padding-bottom: 15px;
`;

interface TitleProps {
  active: boolean;
}

const Title = styled(Text)<TitleProps>`
  font-size: 16px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 15px;
  color: ${(props) => (!props.active ? 'rgba(255, 255, 255, 0.64)' : 'white')};
  padding-left: 10px;
  font-weight: bold;
`;
export default MobileHeader;
