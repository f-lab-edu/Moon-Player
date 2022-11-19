import styled from 'styled-components';
import useMoveDownScroll from 'hooks/useMoveDownScroll';
import usePrevious from 'hooks/usePrevious';
import { handleRemoveMusic, handleAddMusic } from 'store/feature/music/PlayerSlice';
import OverFlowText from 'components/Common/OverFlowText';
import { useEffect } from 'react';
import Image from 'components/Common/Image';
import Flex from 'components/Common/Flex';
import Text from 'components/Common/Text';
import { IconButton } from 'components/Common/IconButton';
import { handleAlarm } from 'store/feature/layout/LayoutSlice';
import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import { Music } from 'types/store';
type ItemProps = {
  video_title: string;
  video_img: string;
  order: number;
};

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
      <Text color="white" fontSize="15px">
        {order}
      </Text>
      <Image onClick={handlePlayMusic} src={video_img} width="100px" height="50px" />
      <OverFlowText
        width="60%"
        fontSize="15px"
        color="white"
        align="center"
        weight="700"
        cursor="pointer"
        onClick={handlePlayMusic}
      >
        {video_title}
      </OverFlowText>
      <IconButton color="white" onClick={handleClickRemove} size="2x" icon="trash"></IconButton>
    </Root>
  );
};
type RootProps = {
  isSelected: boolean;
};
const Root = styled(Flex)<RootProps>`
  border-bottom: 1px solid white;
  background: ${({ isSelected }) => isSelected && 'gray'};
  opacity: ${({ isSelected }) => isSelected && '0.7'};
  gap: 15px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
export default Item;
