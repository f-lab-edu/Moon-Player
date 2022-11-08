import styled from 'styled-components';
import PlayerFooter from 'components/Music/Player/Footer';
import PlayerMusic from 'components/Music/Player/Music';
import Text from 'components/Common/Text';
import ScrollBox from 'components/Common/ScrollBox';
import { useMusicSelector } from 'hooks/useMusicSelector';
// 플레이어 메인
export const Player = () => {
  const [, , playerSelector] = useMusicSelector();
  const playerMusics =
    playerSelector.playerItems &&
    playerSelector.playerItems.map(({ video_title, video_img }, index) => (
      <PlayerMusic video_title={video_title} video_img={video_img} key={index} order={++index} />
    ));
  return (
    <Root>
      <PlayerTitle>재생 목록</PlayerTitle>
      <PlayerBox width="10px" height="5%">
        {playerMusics}
      </PlayerBox>

      <PlayerFooter />
    </Root>
  );
};

const Root = styled.div`
  width: 400px;
  padding: 15px;
  border: 1px solid white;

  border-radius: ${({ theme }) => theme.borderRadius.xl};

  @media screen and (max-width: 1000px) {
    margin: 0px;
    width: 100%;
  }
`;
const PlayerBox = styled(ScrollBox)`
  height: 30vh;
  padding-right: 10px;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const PlayerTitle = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
`;
export default Player;
