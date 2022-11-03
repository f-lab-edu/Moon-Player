import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useMoveDownScroll from 'hooks/useMoveDownScroll';
import usePrevious from 'hooks/usePrevious';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { handleRemoveMusic, handleAddMusic } from 'store/feature/music/PlayerSlice';
import OverFlowText from 'components/Common/OverFlowText';

import { useEffect } from 'react';
import IconButton from 'components/Common/IconButton';
import Image from 'components/Common/Image';
import FlexBetweenRow from 'components/Common/FlexBetweenRow';

import { findObjectInList } from 'utils/app';
const Root = styled(FlexBetweenRow)`
  border-bottom: ${({ theme }) => theme.border.thin};
  background: ${({ isSelected, theme }) => isSelected && theme.colors.Magenta};
  opacity: ${({ isSelected }) => isSelected && '0.7'};
  gap: 15px;
  > :first-child {
    width: 1px;
    padding-left: 10px;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Item = ({ video_title, video_img, order }) => {
  const dispatch = useDispatch();
  const playerState = useSelector((state) => state.music.player);
  const isSelectedMusic = playerState.playmusic.video_title === video_title;
  const playerItemslength = playerState.playerItems.length;
  const prevPlayerItemslength = usePrevious(playerItemslength);
  const { element, handleScrollElement } = useMoveDownScroll();

  useEffect(() => {
    if (prevPlayerItemslength > playerItemslength) return;
    handleScrollElement();
  }, [playerItemslength]);

  // 플레이어 리스트에서 삭제함
  const handleClickRemove = () => dispatch(handleRemoveMusic(video_title));
  const handleMusic = () => {
    // 재생할 음악을 눌렀을떄
    const music = findObjectInList(playerState.playerItems, 'video_title', video_title);
    dispatch(handleAddMusic(music));
  };

  return (
    <Root ref={element} isSelected={isSelectedMusic}>
      <div style={{ color: '#6633cc' }}>{order}</div>
      <Image
        onClick={handleMusic}
        src={video_img}
        width="100px"
        height="50px"
        style={{ cursor: 'pointer', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
      />
      <OverFlowText width="50%" fontSize="15px" color="#6633cc" onClick={handleMusic}>
        {video_title}
      </OverFlowText>

      <IconButton>
        <FontAwesomeIcon onClick={handleClickRemove} icon={faTrash} size={'2x'} color={'#6633cc'} />
      </IconButton>
    </Root>
  );
};

export default Item;
