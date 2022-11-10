import styled from 'styled-components';
import Image from 'components/Common/Image';
import { handleAddPlayer } from 'store/feature/music/PlayerSlice';
import OverFlowText from 'components/Common/OverFlowText';
import { useDispatch } from 'react-redux';
import Flex from 'components/Common/Flex';
import { useMusicSelector } from 'hooks/useMusicSelector';
import { FontAweSomeButton } from 'components/Common/FontAweSomeButton';

export const Music = ({ id, video_title, video_img }) => {
  const dispatch = useDispatch();
  const [, playListSelector, playerSelector] = useMusicSelector();
  const isInPlayer = playerSelector.playerItems.find((item) => item.video_title === video_title) ? true : false;

  const handleAddMusic = () => {
    const selectedMusic = !isInPlayer && playListSelector.musicList.musics.find((item) => item.id === id);
    dispatch(handleAddPlayer(selectedMusic));
  };

  return (
    <Root direction="row" justifyContent="space-between" alignItems="center">
      <div>{id}</div>
      <Image src={video_img} width="100px" height="50px" />
      <OverFlowText width="50%">{video_title}</OverFlowText>
      <FontAweSomeButton active={isInPlayer} event={handleAddMusic} icon="plus" size="2x"></FontAweSomeButton>
    </Root>
  );
};

const Root = styled(Flex)`
  border: ${({ theme }) => theme.border.white};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border-left: none;
  border-right: none;
  border-bottom: none;
  gap: 30px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  > :first-child {
    width: 1px;
  }
`;
export default Music;
