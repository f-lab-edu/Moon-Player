import styled from 'styled-components'
import Image from 'components/Common/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { handleAddMusic } from 'store/feature/music/PlayerSlice';
import IconButton from 'components/Common/IconButton';
import OverFlowText from 'components/Common/OverFlowText';
import { useDispatch, useSelector } from 'react-redux';

const Root = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(0,0,0,0.1);
    color: #6633cc;
    font-weight: 900;
    border-left:none;
    border-right:none;
    border-bottom: none;
    text-align: center;
    gap:20px;
    @media screen and (max-width:1200px){
      width: 100%;
    }
    >:first-child{
      display: flex;
      align-items: center;
      gap:20px;
      >:first-child{
      width: 10px;
      }
    }
 
`
export const Item = ({ id, title, img }) => {
  const dispatch = useDispatch()
  const playListItems = useSelector(state => state.musicReducer.musicPlayList.musicList.musics)
  const playerItems = useSelector(state => state.musicReducer.musicPlayer.playerItems)
  const isInPlayer = playerItems.find((item) => item.video_title === title)

  // 아이디 값을 기반으로 musicList 스토어의 selected에 저장
  const handleMusic = () => {
    // 단일 return object
    const selectedItem = playListItems.filter((item) => item.id === id)?.[0]
    // musicPlayer store에 playerItems 에 add한다.
    dispatch(handleAddMusic(selectedItem))
  }

  return (
    <Root>
      <div>
        <div>{id}</div>
        <Image img={img} />
      </div>
      <OverFlowText>{title}</OverFlowText>
      <div>
        <IconButton disabled={isInPlayer}>
          <FontAwesomeIcon onClick={handleMusic} icon={faCirclePlus} size={'3x'} />
        </IconButton>
      </div>
    </Root>
  )
}