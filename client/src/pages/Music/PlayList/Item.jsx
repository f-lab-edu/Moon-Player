import styled from 'styled-components';
import Image from 'components/Common/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { handleAddPlayer } from 'store/feature/music/PlayerSlice';
import IconButton from 'components/Common/IconButton';
import OverFlowText from 'components/Common/OverFlowText';
import { useDispatch, useSelector } from 'react-redux';

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #6633cc;
  font-weight: 900;
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
const MusicTitle = styled(OverFlowText)`
  width: 50%;
  font-size: 15px;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
const MusicImage = styled(Image)`
  width: 100px;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const Button = styled(IconButton)`
  &:hover {
    transform: scale(1.2);
    color: white;
  }
`;

export const Item = ({ id, title, img }) => {
  const dispatch = useDispatch();
  const playListItems = useSelector((state) => state.music.playList.musicList.musics);
  const playerItems = useSelector((state) => state.music.player.playerItems);
  const isInPlayer = playerItems.find((item) => item.video_title === title);

  // 아이디 값을 기반으로 musicList 스토어의 selected에 저장
  const handleAddMusic = () => {
    const selectedItem = playListItems.filter((item) => item.id === id)?.[0];
    dispatch(handleAddPlayer(selectedItem));
  };

  return (
    <Root>
      <div>{id}</div>
      <MusicImage img={img} />
      <MusicTitle>{title}</MusicTitle>

      <Button disabled={isInPlayer}>
        <FontAwesomeIcon onClick={handleAddMusic} icon={faCirclePlus} size={'2x'} />
      </Button>
    </Root>
  );
};
