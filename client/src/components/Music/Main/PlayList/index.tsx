import styled from 'styled-components';
import Music from 'components/Music/Main/PlayList/Item/Item';
import Text from 'components/Global/style/Text';
import ScrollBox from 'components/Global/style/ScrollBox';
import { useAppSelector } from 'hooks/useReduxStore';
import PlayerHeader from '../Header/index';

// 플레이어 메인
export const PlayList = () => {
  const playerSelector = useAppSelector((state) => state.music.player);

  const playerMusics =
    playerSelector.list.length > 0 ? (
      playerSelector.list.map(({ name, img_url, source_url }, index) => (
        <Music name={name} img_url={img_url} key={index} id={++index} source_url={source_url} />
      ))
    ) : (
      <EmptyText>재생 목록이 비어있습니다.</EmptyText>
    );

  return (
    <Layout>
      <PlayerHeader title="P L A Y L I S T" />
      {playerMusics}
    </Layout>
  );
};

const Layout = styled(ScrollBox)`
  width: 40%;
  height: 100vh;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.12));
  border-radius: 7px;
  padding: 15px;
  margin-top: 15px;
  @media (max-width: 1199px) {
    width: 100%;
  }
`;
const EmptyText = styled(Text)`
  color: rgba(255, 255, 255, 0.64);
  font-size: 20px;
`;

export default PlayList;
