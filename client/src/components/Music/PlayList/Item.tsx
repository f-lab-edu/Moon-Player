import styled from 'styled-components';
import Image from 'components/Global/Image';
import { handleAddPlayer } from 'store/feature/music/PlayerSlice';
import OverFlowText from 'components/Global/OverFlowText';

import Flex from 'components/Global/Flex';
import IconButton from 'components/Global/IconButton';
import { Music } from 'types/store';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
interface ItemProps {
  video_title: string;
  id: number | string;
  video_img: string;
}

export const Item = ({ id, video_title, video_img }: ItemProps) => {
  const dispatch = useAppDispatch();
  const playerSelector = useAppSelector((state) => state.music.player);
  const playListSelector = useAppSelector((state) => state.music.playList);
  const isInPlayer = playerSelector.playerItems.find((music: Music) => music.video_title === video_title)
    ? true
    : false;

  const handleAddMusic = () => {
    if (isInPlayer) return;
    const selectedMusic = playListSelector.musicList.musics.find((music: Music) => music.id === id);

    if (selectedMusic) dispatch(handleAddPlayer(selectedMusic));
  };

  return (
    <Root direction="row" justifyContent="space-between" alignItems="center">
      <div>{id}</div>
      <MusicImage img={video_img} />
      <MusicTitle>{video_title}</MusicTitle>
      <IconButton color="white" active={isInPlayer} onClick={handleAddMusic} icon="plus" size="2x"></IconButton>
    </Root>
  );
};

const Root = styled(Flex)`
  border: 1px solid white;
  border-left: none;
  border-right: none;
  border-bottom: none;
  color: white;
  font-weight: 700;
  gap: 30px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  > :first-child {
    width: 1px;
  }
`;

const MusicImage = styled(Image)`
  width: 100px;
  height: 50px;
`;

const MusicTitle = styled(OverFlowText)`
  width: 50%;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export default Item;
