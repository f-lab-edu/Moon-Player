import styled from 'styled-components';
import Footer from 'components/Music/Player/Footer';
import Music from 'components/Music/Player/List/Item/Item';
import Text from 'components/Global/style/Text';
import ScrollBox from 'components/Global/style/ScrollBox';
import { useAppSelector } from 'hooks/useAppDispatch';

// 플레이어 메인
export const Player = () => {
  const playerSelector = useAppSelector((state) => state.music.player);
  const playerMusics =
    playerSelector.list.length > 0 ? (
      playerSelector.list.map(({ name, img_url }, index) => (
        <Music name={name} img_url={img_url} key={index} number={++index} />
      ))
    ) : (
      <EmptyText>재생 목록이 비어있습니다.</EmptyText>
    );
  return (
    <Root>
      <Title>재생 목록</Title>
      <List>{playerMusics}</List>
      <Footer />
    </Root>
  );
};

const Root = styled.div`
  width: 30%;
  padding: 15px;
  border: 1px solid white;
  border-radius: 7px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 50px;
  }
`;
const List = styled(ScrollBox)`
  height: 30vh;
  padding-right: 10px;
`;

const Title = styled(Text)`
  font-size: 20px;
  color: white;
`;
const EmptyText = styled(Text)`
  color: white;
  font-size: 20px;
`;
export default Player;
