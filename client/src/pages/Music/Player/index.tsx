import styled from 'styled-components';
import PlayerFooter from 'components/Music/Player/Footer';
import PlayerMusic from 'components/Music/Player/Content/Item';
import Text from 'components/Common/UI/Text';
import ScrollBox from 'components/Common/UI/ScrollBox';
import { useAppSelector } from 'hooks/useAppDispatch';

// 플레이어 메인
export const Player = () => {
  const playerSelector = useAppSelector((state) => state.music.player);
  const playerMusics =
    playerSelector.playerItems.length > 0 ? (
      playerSelector.playerItems.map(({ video_title, video_img }, index) => (
        <PlayerMusic video_title={video_title} video_img={video_img} key={index} order={++index} />
      ))
    ) : (
      <Text color="white" fontSize="20px">
        재생 목록이 비어있습니다.
      </Text>
    );
  return (
    <Root>
      <PlayerTitle>재생 목록</PlayerTitle>
      <PlayerContent>{playerMusics}</PlayerContent>
      <PlayerFooter />
    </Root>
  );
};

const Root = styled.div`
  width: 400px;
  padding: 15px;
  border: 1px solid white;
  border-radius: 7px;

  @media screen and (max-width: 1000px) {
    margin: 0px;
    width: 100%;
  }
`;
const PlayerContent = styled(ScrollBox)`
  height: 30vh;
  padding-right: 10px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const PlayerTitle = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: white;
`;

export default Player;
