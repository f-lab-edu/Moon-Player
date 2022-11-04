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
    width: 5px;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Item = ({ video_title, video_img, order }) => {
  const dispatch = useDispatch();
  const playerState = useSelector((state) => state.music.player);
  const isplayingMusic = playerState.playmusic.video_title === video_title;
  const playerItemslength = playerState.playerItems.length;
  const prevPlayerItemslength = usePrevious(playerItemslength);
  const { element, handleScrollElement } = useMoveDownScroll();

  useEffect(() => {
    if (prevPlayerItemslength > playerItemslength) return;
    handleScrollElement();
  }, [playerItemslength]);

  // 플레이어 리스트에서 삭제할시 현재 재생중인거는 삭제 못하게막음

  const handleClickRemove = () => {
    !isplayingMusic ? dispatch(handleRemoveMusic(video_title)) : alert('현재 재생중인 음악은 삭제할수없습니다');
  };

  const handleMusic = () => {
    // 재생할 음악을 눌렀을떄
    const music = findObjectInList(playerState.playerItems, 'video_title', video_title);
    dispatch(handleAddMusic(music));
  };

  return (
    <Root ref={element} isSelected={isplayingMusic}>
      <div style={{ color: '#6633cc' }}>{order}</div>
      <Image onClick={handleMusic} src={video_img} width="100px" height="50px" />
      <OverFlowText width="60%" fontSize="15px" color="#6633cc" onClick={handleMusic} style={{ textAlign: 'center' }}>
        {video_title}
      </OverFlowText>

      <IconButton>
        <FontAwesomeIcon onClick={handleClickRemove} icon={faTrash} size={'2x'} color={'#6633cc'} />
      </IconButton>
    </Root>
  );
};

export default Item;
