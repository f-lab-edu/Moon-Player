import styled from 'styled-components';
import useMoveDownScroll from 'hooks/useMoveDownScroll';
import usePrevious from 'hooks/usePrevious';
import { useDispatch } from 'react-redux';
import { handleRemoveMusic, handleAddMusic } from 'store/feature/music/PlayerSlice';
import OverFlowText from 'components/Common/OverFlowText';
import { useEffect } from 'react';
import Image from 'components/Common/Image';
import Flex from 'components/Common/Flex';
import { useMusicSelector } from 'hooks/useMusicSelector';
import Text from 'components/Common/Text';
import { IconButton } from 'components/Common/IconButton';
import { handleAlarm } from 'store/feature/layout/LayoutSlice';
export const Music = ({ video_title, video_img, order }) => {
  const dispatch = useDispatch();
  const [, , playerSelector] = useMusicSelector();
  const isSelectedMusic = playerSelector.playmusic.video_title === video_title;
  const playerItemslength = playerSelector.playerItems.length;
  const prevPlayerItemslength = usePrevious(playerItemslength);
  const { element, handleScrollElement } = useMoveDownScroll();

  useEffect(() => {
    if (prevPlayerItemslength > playerItemslength) return;
    handleScrollElement();
  }, [playerItemslength]);

  const handleClickRemove = () => {
    return isSelectedMusic
      ? dispatch(handleAlarm({ isOpen: true, text: '현재 선택중인 음악은 삭제할수없습니다.' }))
      : dispatch(handleRemoveMusic(video_title));
  };

  const handleMusic = () => {
    const music = playerSelector.playerItems.find((item) => item.video_title === video_title);
    dispatch(handleAddMusic(music));
  };

  return (
    <Root ref={element} isSelected={isSelectedMusic} direction="row" justifyContent="space-between" alignItems="center">
      <Text shadow="0" fontSize="15px">
        {order}
      </Text>
      <Image onClick={handleMusic} src={video_img} width="100px" height="50px" />
      <OverFlowText
        width="60%"
        fontSize="15px"
        color="white"
        align="center"
        weight="700"
        cursor="pointer"
        onClick={handleMusic}
      >
        {video_title}
      </OverFlowText>
      <IconButton event={handleClickRemove} size="2x" icon="trash"></IconButton>
    </Root>
  );
};
const Root = styled(Flex)`
  border-bottom: ${({ theme }) => theme.border.white};
  background: ${({ isSelected, theme }) => isSelected && theme.colors.gray};
  opacity: ${({ isSelected }) => isSelected && '0.7'};
  gap: 15px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
export default Music;
