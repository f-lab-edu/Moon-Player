import styled from 'styled-components';
import Image from 'components/Common/Image';
import { handleAddPlayer } from 'store/feature/music/PlayerSlice';
import OverFlowText from 'components/Common/OverFlowText';

import Flex from 'components/Common/Flex';
import { useMusicSelector } from 'hooks/useMusicSelector';
import { IconButton } from 'components/Common/IconButton';
import { Music } from 'types/store';
import { useAppDispatch } from 'hooks/useAppDispatch';

export const Item = ({ id, video_title, video_img }: Music) => {
  const dispatch = useAppDispatch();
  const [, playListSelector, playerSelector] = useMusicSelector();
  const isInPlayer = playerSelector.playerItems.find((music) => music.video_title === video_title) ? true : false;

  const handleAddMusic = () => {
    const selectedMusic = !isInPlayer && playListSelector.musicList.musics.find((music) => music.id === id);
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
  border: 'white';
  color: 'white';
  font-weight: 700;
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
export default Item;
