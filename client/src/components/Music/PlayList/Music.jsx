import styled from 'styled-components';
import Image from 'components/Common/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { handleAddPlayer } from 'store/feature/music/PlayerSlice';
import IconButton from 'components/Common/IconButton';
import OverFlowText from 'components/Common/OverFlowText';
import { useDispatch } from 'react-redux';
import Flex from 'components/Common/Flex';
import { useMusicSelector } from 'hooks/useMusicSelector';
const Root = styled(Flex)`
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
export const Music = ({ id, video_title, video_img }) => {
  const dispatch = useDispatch();
  const [, playListSelector, playerSelector] = useMusicSelector();
  const isInPlayer = playerSelector.playerItems.find((item) => item.video_title === video_title) ? true : false;

  const handleAddMusic = () => {
    const selectedMusic = !isInPlayer && playListSelector.musicList.musics.find((item) => item.id === id);
    dispatch(handleAddPlayer(selectedMusic));
  };

  return (
    <Root direction="row" justifyContent="space-between" alignItems="center">
      <div>{id}</div>
      <Image src={video_img} width="100px" height="50px" />
      <OverFlowText width="50%">{video_title}</OverFlowText>

      <IconButton active={isInPlayer}>
        <FontAwesomeIcon onClick={handleAddMusic} icon={faCirclePlus} size={'2x'} />
      </IconButton>
    </Root>
  );
};

export default Music;
