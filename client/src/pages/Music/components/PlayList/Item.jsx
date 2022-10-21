import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { add } from 'store/feature/music/PlayerSlice';

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

    /* 텍스트 */
    >div:nth-of-type(2){
      width:60%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap; 
      font-weight: 900;
    }
    /* 버튼 */
    >div:nth-of-type(3){
      display: flex;
      gap: 2px;
      >svg{
        cursor: pointer;
      transition: all 0.3s linear;
        &:active{
          transform: translateY(4px);

        }
        &:hover{  
          color:white;
        }
      
      }
    }
    

    @media screen and (max-width:1200px){
      width: 100%;

    }
 
`

const Image = styled.img(({ img }) => `
    background: url('${img}') no-repeat;
    background-size: cover;
    background-position: center;
    width:100px;
    height:50px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`)
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
  // 안티패턴?
  const playListItems = useSelector(state => state.musicReducer.musicPlayList.musicList.musics)

  // 아이디 값을 기반으로 musicList 스토어의 selected에 저장
  const onAddButtonHandler = () => {
    // 단일 return object
    const selected_item = playListItems.filter((item) => item.id === id)[0]
    // musicPlayer store에 playerItems 에 add한다.
    dispatch(add(selected_item))
    return
  }

  return (
    <Layout>
      <Box>
        <div>{id}</div>
        <Image img={img} />
      </Box>

      <div>{`${title}`}</div>
      <div>
        <FontAwesomeIcon icon={faCirclePlay} size={'2x'} />
        <FontAwesomeIcon onClick={onAddButtonHandler} icon={faCirclePlus} size={'2x'} />
      </div>
    </Layout>
  )
}

export default Item