import styled from 'styled-components';
import Image from 'components/Global/style/Image';
import { handleAddPlayer } from 'store/feature/music/PlayerSlice';
import OverFlowText from 'components/Global/style/OverFlowText';

import Flex from 'components/Global/style/Flex';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import { Music } from 'types/store';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
interface ItemProps {
  name: string;
  id: number;
  img_url: string;
}

export const Item = ({ id, name, img_url }: ItemProps) => {
  const dispatch = useAppDispatch();
  const playerSelector = useAppSelector((state) => state.music.player);
  const playListSelector = useAppSelector((state) => state.music.playList);
  const isInPlayer = playerSelector.list.find((music: Music) => music.name === name) ? true : false;

  const handleAddMusic = () => {
    if (isInPlayer) return;
    const selectedMusic = playListSelector.genre.music_list.find((music: Music) => music.id === id);

    if (selectedMusic) dispatch(handleAddPlayer(selectedMusic));
  };

  return (
    <Root direction="row" justifyContent="space-between" alignItems="center">
      <MusicImage img={img_url} />
      <MusicTitle color='rgba(255,255,255,0.84)'>{name}</MusicTitle>
      <IconButton
        color='rgba(255,255,255,0.76)'
        active={isInPlayer}
        onClick={handleAddMusic} icon="plus" size="2x"
      />
    </Root>
  );
};

const Root = styled(Flex)`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid rgba(255,255,255,0.16);
  color: rgba(255,255,255, 0.64);
  font-weight: 700;
  gap: 30px;
  &:last-child {
    border-bottom: none;
  }
`;

const MusicImage = styled(Image)`
  width: 128px;
  height: 72px;
  object-fit: cover;
`;

const MusicTitle = styled(OverFlowText)`
  flex: 1;
  font-size: 16px;
`;

export default Item;
