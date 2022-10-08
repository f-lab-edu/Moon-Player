import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import ItemLayout from 'components/items/ItemLayout';
import Image from 'components/items/Image';

const MusicListItemLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(0,0,0,0.1);
    width: 700px;
    height: 50px;
    border-left:none;
    border-right:none;
    border-bottom: none;
`
const MusicPlayListItems = styled(ItemLayout)`
    flex-direction: row;
    padding-left: 0px;
    color: #6633cc;
    font-weight: 900;
    margin-right: 10px;
`

const MusicPlayListItem = styled.li`
margin-left: 5px;
`
const MusicImage = styled(Image)`
  height:50px;
  width:50px;
`

const MusicMainPlayListItem = () => {
  return (
    <MusicListItemLayout>
      <MusicPlayListItems>
        <MusicPlayListItem>1</MusicPlayListItem>
        <MusicImage />
        <MusicPlayListItem>아이유</MusicPlayListItem>
      </MusicPlayListItems>
      <MusicPlayListItems>
        <MusicPlayListItem>좋은날</MusicPlayListItem>
      </MusicPlayListItems>
      <MusicPlayListItems>
        <MusicPlayListItem><FontAwesomeIcon icon={faCirclePlay} size={'2x'} /></MusicPlayListItem>
        <MusicPlayListItem><FontAwesomeIcon icon={faCircleCheck} size={'2x'} /></MusicPlayListItem>
      </MusicPlayListItems>
    </MusicListItemLayout>
  )
}
export default MusicMainPlayListItem