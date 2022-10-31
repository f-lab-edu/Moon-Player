import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useMoveDownScroll from 'hooks/useMoveDownScroll';
import usePrevious from 'hooks/usePrevious';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { handleRemoveMusic, handlePlayMusic } from 'store/feature/music/PlayerSlice';
import OverFlowText from 'components/Common/OverFlowText';

import { useEffect } from 'react';
import IconButton from 'components/Common/IconButton';

const Root = styled.div(({ isSelected }) => `
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(0,0,0,0.1);
background:${isSelected && '#FA7CD7'};
opacity:${isSelected && '0.7'};
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

const MusicTitle = styled(OverFlowText)`
  font-size: 15px;
  width:300px; 
  cursor: pointer;
  @media screen and (max-width:1000px){
  width: 100%; 
  }
`
const MusicImage = styled.img(({ img }) => `
width:150px;
height:50px;

cursor:pointer;
background: url('${img}') center center / cover no-repeat;
background-size: cover;
background-position: center;

box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`)

export const Item = (({ title, image, order }) => {

  const dispatch = useDispatch()
  const playerItems = useSelector(state => state.musicReducer.musicPlayer.playerItems)
  const isSelectedMusic = useSelector(state => state.musicReducer.musicPlayer.playing.music).video_title === title
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
    dispatch(handleRemoveMusic(title))
  }

  // 재생할 음악을 눌렀을떄
  const handleClickPlayMusic = () => {
    const music = playerItems.find((item) => item.video_title === title)
    dispatch(handlePlayMusic(music))

  }

  return (
    <Root ref={element} isSelected={isSelectedMusic} >
      <div>{order}</div>
      <MusicImage onClick={handleClickPlayMusic} img={image} />
      <MusicTitle onClick={handleClickPlayMusic}>{title}</MusicTitle>

      <IconButton>
        <FontAwesomeIcon onClick={handleClickRemove} icon={faTrash} size={'2x'} color={'#6633cc'} />
      </IconButton>
    </Root >
  )
});
