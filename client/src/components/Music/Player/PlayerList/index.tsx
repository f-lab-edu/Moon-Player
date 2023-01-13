import styled from 'styled-components';
import Music from 'components/Music/Player/PlayerList/Item/Item';
import Text from 'components/Global/style/Text';
import ScrollBox from 'components/Global/style/ScrollBox';
import { useAppSelector } from 'hooks/useAppDispatch';

// 플레이어 메인
export const PlayerList = () => {
  const playerSelector = useAppSelector((state) => state.music.player);
  const playerMusics =
    playerSelector.list.length > 0 ? (
      playerSelector.list.map(({ name, img_url, source_url }, index) => (
        <Music name={name} img_url={img_url} key={index} id={++index} source_url={source_url} />
      ))
    ) : (
      <EmptyText>재생 목록이 비어있습니다.</EmptyText>
    );

  return <Layout>{playerMusics}</Layout>;
};

const Layout = styled(ScrollBox)`
  height: 30vh;
  h3 {
    font-size: 18px;
    margin-right: 10px;
  }
  div {
    font-size: 16px;
  }
  img {
    width: 64px;
    height: 64px;
  }
`;

const EmptyText = styled(Text)`
  color: rgba(255, 255, 255, 0.64);

  font-size: 20px;
`;

export default PlayerList;
