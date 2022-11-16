import styled from 'styled-components';
import Image from 'components/Common/Image';
import { handleAddPlayer } from 'store/feature/music/PlayerSlice';
import OverFlowText from 'components/Common/OverFlowText';

import Flex from 'components/Common/Flex';
import { IconButton } from 'components/Common/IconButton';
import { MusicDataType } from 'types/store';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
type ItemProps = {
  video_title: string;
  id: number;
  video_img: string;
};
export const Item = ({ id, video_title, video_img }: ItemProps) => {
  console.log(id);
  const dispatch = useAppDispatch();
  const playerSelector = useAppSelector((state) => state.music.player);
  const playListSelector = useAppSelector((state) => state.music.playList);
  const isInPlayer = playerSelector.playerItems.find((music: MusicDataType) => music.video_title === video_title)
    ? true
    : false;

  const handleAddMusic = () => {
    if (isInPlayer) return;
    const selectedMusic = playListSelector.musicList.musics.find(
      (music: MusicDataType) => music.id === id
    ) as MusicDataType;
    dispatch(handleAddPlayer(selectedMusic));
  };

  return (
    <Root direction="row" justifyContent="space-between" alignItems="center">
      <div>{id}</div>
      <Image src={video_img} width="100px" height="50px" />
      <OverFlowText fontSize="16px" width="50%">
        {video_title}
      </OverFlowText>
      <IconButton color="white" active={isInPlayer} event={handleAddMusic} icon="plus" size="2x"></IconButton>
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
export default Item;
