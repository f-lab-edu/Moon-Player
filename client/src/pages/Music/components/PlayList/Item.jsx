import styled from 'styled-components'
import Image from 'components/Common/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { add } from 'store/feature/music/PlayerSlice';
import SmallButton from 'components/Common/SmallButton';
import Text from 'components/Common/Text';
import { useDispatch, useSelector } from 'react-redux';

const Layout = styled.div`
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
 
`

const Box = styled.div`
  display: flex;
  align-items: center;
  gap:20px;
  >:first-child{
    width: 10px;
  }

`

const Item = ({ id, title, img, }) => {
  const dispatch = useDispatch()
  const playListItems = useSelector(state => state.musicReducer.musicPlayList.musicList.musics)
  const playerItems = useSelector(state => state.musicReducer.musicPlayer.playerItems)
  const isInPlayer = playerItems.find((item) => item.video_title === title)

  // 아이디 값을 기반으로 musicList 스토어의 selected에 저장

  const handleClickAddButton = () => {
    // 단일 return object
    const selected_item = playListItems.filter((item) => item.id === id)[0]
    // musicPlayer store에 playerItems 에 add한다.
    dispatch(add(selected_item))
  }

  return (
    <Layout>
      <Box>
        <div>{id}</div>
        <Image img={img} />
      </Box>

      <Text>{`${title}`}</Text>
      <Box>
        <SmallButton>
          <FontAwesomeIcon icon={faCirclePlay} size={'2x'} />
        </SmallButton>
        <SmallButton disabled={isInPlayer}>
          <FontAwesomeIcon onClick={handleClickAddButton} icon={faCirclePlus} size={'2x'} />
        </SmallButton>

      </Box>
    </Layout>
  )
}

export default Item