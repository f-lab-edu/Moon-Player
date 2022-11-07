import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useMoveDownScroll from 'hooks/useMoveDownScroll';
import usePrevious from 'hooks/usePrevious';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { handleRemoveMusic, handleAddMusic } from 'store/feature/music/PlayerSlice';
import OverFlowText from 'components/Common/OverFlowText';
import { useEffect } from 'react';
import IconButton from 'components/Common/IconButton';
import Image from 'components/Common/Image';
import Flex from 'components/Common/Flex';
import { useMusicSelector } from 'hooks/useMusicSelector';
import Text from 'components/Common/Text';

const Root = styled(Flex)`
  border-bottom: ${({ theme }) => theme.border.white};
  background: ${({ isSelected, theme }) => isSelected && theme.colors.gray};
  opacity: ${({ isSelected }) => isSelected && '0.7'};
  gap: 15px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
export const Music = ({ video_title, video_img, order }) => {
  const dispatch = useDispatch();
  const [, , playerSelector] = useMusicSelector();
  const isSelectedMusic = playerSelector.playmusic.video_title === video_title;
  const playerItemslength = playerSelector.playerItems.length;
  const prevPlayerItemslength = usePrevious(playerItemslength);
  const { element, handleScrollElement } = useMoveDownScroll();

  useEffect(() => {
    if (prevPlayerItemslength > playerItemslength) return;
    console.log('스크롤 실행');
    handleScrollElement();
  }, [playerItemslength]);

  // 플레이어 리스트에서 삭제할시 현재 재생중인거는 삭제 못하게막음

  const handleClickRemove = () => {
    return isSelectedMusic ? alert('현재 선택중인 음악은 삭제할수없습니다.') : dispatch(handleRemoveMusic(video_title));
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

      <IconButton>
        <FontAwesomeIcon onClick={handleClickRemove} icon={faTrash} size={'2x'} />
      </IconButton>
    </Root>
  );
};

export default Music;
