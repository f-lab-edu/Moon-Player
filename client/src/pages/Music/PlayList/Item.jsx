import styled from 'styled-components';
import Image from 'components/Common/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { handleAddPlayer } from 'store/feature/music/PlayerSlice';
import IconButton from 'components/Common/IconButton';
import OverFlowText from 'components/Common/OverFlowText';
import { useDispatch, useSelector } from 'react-redux';

import { FlexBetweenRow } from 'components/Common/FlexBetweenRow';
import { useMusicSelector } from 'hooks/useMusicSelector';
const Root = styled(FlexBetweenRow)`
  border: ${({ theme }) => theme.border.white};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
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
export const Item = ({ id, video_title, video_img }) => {
  const dispatch = useDispatch();

  const [, playListSelector, playerSelector] = useMusicSelector();
  const isInPlayer = playerSelector.playerItems.find((item) => item.video_title === video_title) ? true : false;

  const handleAddMusic = () => {
    const selectedMusic = !isInPlayer && playListSelector.musicList.musics.find((item) => item.id === id);
    dispatch(handleAddPlayer(selectedMusic));
  };

  return (
    <Root>
      <div>{id}</div>
      <Image src={video_img} width="100px" height="50px" />
      <OverFlowText width="50%" fontSize="15px" style={{ cursor: 'default' }}>
        {video_title}
      </OverFlowText>

      <IconButton disabled={isInPlayer}>
        <FontAwesomeIcon onClick={handleAddMusic} icon={faCirclePlus} size={'2x'} />
      </IconButton>
    </Root>
  );
};

export default Item;
