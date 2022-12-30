import styled from 'styled-components';
import useMoveDownScroll from 'hooks/useMoveDownScroll';
import usePrevious from 'hooks/usePrevious';
import { handleRemoveMusic, handleAddMusic } from 'store/feature/music/PlayerSlice';
import OverFlowText from 'components/Global/style/OverFlowText';
import { useEffect } from 'react';
import Image from 'components/Global/style/Image';
import Flex from 'components/Global/style/Flex';
import Text from 'components/Global/style/Text';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import { handleAlarm } from 'store/feature/layout/LayoutSlice';
import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import { Music } from 'types/store';
interface ItemProps {
  video_title: string;
  video_img: string;
  order: number | string;
}

export const Item = ({ video_title, video_img, order }: ItemProps) => {
  const dispatch = useAppDispatch();

  const playerSelector = useAppSelector((state) => state.music.player);
  const isCurrentMusic = playerSelector.playmusic.video_title === video_title ? true : false;
  const playerItemslength = playerSelector.playerItems.length;
  const prevPlayerItemslength = usePrevious(playerItemslength) as number;
  const { element, handleScrollElement } = useMoveDownScroll();

  useEffect(() => {
    if (prevPlayerItemslength > playerItemslength) return;
    handleScrollElement();
  }, [playerItemslength]);

  const handleClickRemove = () => {
    return isCurrentMusic
      ? dispatch(handleAlarm({ isOpen: true, text: '현재 선택중인 음악은 삭제할수없습니다.' }))
      : dispatch(handleRemoveMusic(video_title));
  };

  const handlePlayMusic = () => {
    const selectedMusic = playerSelector.playerItems.find((music: Music) => music.video_title === video_title);
    if (selectedMusic) dispatch(handleAddMusic(selectedMusic));
  };

  return (
    <Root ref={element} isSelected={isCurrentMusic} direction="row" justifyContent="space-between" alignItems="center">
      <OrderText>{order}</OrderText>
      <MusicImage onClick={handlePlayMusic} img={video_img} />
      <MusicTitle onClick={handlePlayMusic}>{video_title}</MusicTitle>
      <IconButton color="white" onClick={handleClickRemove} size="2x" icon="trash"></IconButton>
    </Root>
  );
};
interface RootProps {
  isSelected: boolean;
}
const Root = styled(Flex)<RootProps>`
  border-bottom: 1px solid white;
  background: ${({ isSelected }) => isSelected && 'gray'};
  opacity: ${({ isSelected }) => isSelected && '0.7'};
  gap: 15px;
`;

const OrderText = styled(Text)`
  color: white;
  font-size: 16px;
`;
const MusicTitle = styled(OverFlowText)`
  width: 60%;
  font-size: 16px;
  color: white;
  text-align: center;
  cursor: pointer;
`;
const MusicImage = styled(Image)`
  width: 100px;
  height: 50px;
`;

export default Item;
