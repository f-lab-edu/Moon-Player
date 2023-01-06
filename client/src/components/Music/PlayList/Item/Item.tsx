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
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      <div>{id}</div>
      <MusicImage img={img_url} />
      <MusicTitle>{name}</MusicTitle>
      <IconButton color="white" active={isInPlayer} onClick={handleAddMusic} icon="plus" size="2x"></IconButton>
    </Layout>
  );
};

const Layout = styled(Flex)`
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
  font-size: 16px;
`;

export default Item;
