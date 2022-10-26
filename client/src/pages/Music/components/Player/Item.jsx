import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removePlayerList, handlePlayItem } from 'store/feature/music/PlayerSlice';
import Text from 'components/Common/Text';
import useMoveDownScroll from 'hooks/useMoveDownScroll';
import usePrevious from 'hooks/usePrevious';

import { useEffect } from 'react';
import SmallButton from 'components/Common/SmallButton';

const Layout = styled.div(({ selected }) => `
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(0,0,0,0.1);
background:${selected && '#FA7CD7'};
opacity:${selected && '0.7'};
gap:20px;
text-align: center;
>:first-child{
  width:1px;
  padding-left:10px;
  font-weight: 900;
}

@media screen and (max-width:1000px){
  width: 100%; 
}

`)

const Title = styled(Text)`
  font-size: 15px;
  width:300px; 
  cursor: pointer;
  @media screen and (max-width:1000px){
  width: 100%; 
  }
`
const Image = styled.img(({ img }) => `
width:150px;
height:50px;

cursor:pointer;
background: url('${img}') center center / cover no-repeat;
background-size: cover;
background-position: center;

box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`)

const Item = (({ title, image, order }) => {

  const dispatch = useDispatch()
  const playerItems = useSelector(state => state.musicReducer.musicPlayer.playerItems)
  const playerItemslength = playerItems.length
  const prevPlayerItemslength = usePrevious(playerItemslength)
  const { element, handleScrollElement } = useMoveDownScroll()

  useEffect(() => {
    if (playerItemslength > prevPlayerItemslength) {
      handleScrollElement()
    }
  }, [playerItemslength])

  // 플레이어 리스트에서 삭제함 
  const handleClickRemove = () => {
    dispatch(removePlayerList(title))
  }

  // 재생할 음악을 눌렀을떄
  const handleClickPlayMusic = () => {
    let playerItemindex = playerItems.findIndex((item) => item.video_title === title)
    const newMusics = [...playerItems.slice(playerItemindex), ...playerItems.slice(0, playerItemindex)]
    console.log(playerItemindex, newMusics)
    // 현재 선택된 음악 포함해서 현재 선택된 음악전까지의 음악들
    dispatch(handlePlayItem(newMusics))

  }

  return (
    <Layout ref={element}>
      <div>{order}</div>
      <Image onClick={handleClickPlayMusic} img={image} />
      <Title onClick={handleClickPlayMusic}>{title}</Title>

      <SmallButton>
        <FontAwesomeIcon onClick={handleClickRemove} icon={faTrash} size={'2x'} color={'#6633cc'} />
      </SmallButton>

    </Layout >
  )
});

export default Item