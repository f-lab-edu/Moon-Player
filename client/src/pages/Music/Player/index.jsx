import styled from 'styled-components';
import PlayerFooter from './Footer';
import PlayerItem from './Item';
import Text from 'components/Common/Text';
import ScrollBox from 'components/Common/ScrollBox';
import { useMusicSelector } from 'hooks/useMusicSelector';
const Root = styled.div`
  width: 30%;
  border: 1px solid white;
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius.xl};

  @media screen and (max-width: 1000px) {
    margin: 0px;
    width: 100%;
  }
`;
const ItemBox = styled(ScrollBox)`
  height: 30vh;
  padding-right: 10px;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
const PlayerHeader = styled.div`
  height: 50px;
`;
const PlayerTitle = styled.h3`
  position: sticky;
  top: 0px;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 2px 2px 2px gray;
`;

// 플레이어 메인
export const Player = () => {
  const [, , playerSelector] = useMusicSelector();
  const playerMusic =
    playerSelector.playerItems.length > 0 ? (
      playerSelector.playerItems.map(({ video_title, video_img }, index) => (
        <PlayerItem video_title={video_title} video_img={video_img} key={index} order={++index} />
      ))
    ) : (
      <Text>재생목록이 비어있습니다.</Text>
    );
  return (
    <Root>
      <PlayerHeader>
        <PlayerTitle>재생 목록</PlayerTitle>
      </PlayerHeader>
      <ItemBox width={'10px'} height={'5%'}>
        {playerMusic}
      </ItemBox>

      <PlayerFooter />
    </Root>
  );
};
export default Player;
