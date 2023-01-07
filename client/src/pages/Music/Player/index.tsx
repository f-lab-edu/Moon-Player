import styled from 'styled-components';
import Footer from 'components/Music/Player/Footer';
import Music from 'components/Music/Player/List/Item/Item';
import Text from 'components/Global/style/Text';
import ScrollBox from 'components/Global/style/ScrollBox';
import { useAppSelector } from 'hooks/useAppDispatch';
import Flex from 'components/Global/style/Flex';

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
  return (<Root direction='column'>
    <Title>P L A Y L I S T</Title>
    <ListRoot>
      <List>{playerMusics}</List>
    </ListRoot>
  </Root>);
};

const Root = styled(Flex)`
  width: 30%;
`;

const ListRoot = styled.div`
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.16);
  background: linear-gradient(rgba(0,0,0,0.24), rgba(0,0,0,0.12));
  border-radius: 7px;

`;
const List = styled(ScrollBox)`
  height: 100%;
`;

const Title = styled(Text)`
  font-size: 16px;
  color: rgba(255,255,255, 0.64);
  margin: 8px 0;
  font-weight: normal;
`;
const EmptyText = styled(Text)`
  color: rgba(255,255,255, 0.64);
  font-size: 20px;
`;
export default Player;
