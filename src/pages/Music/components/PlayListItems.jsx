import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import ItemLayout from 'components/items/ItemLayout';
import Image from 'components/items/Image';

const PlayListItemsLayout = styled.div`
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

    @media screen and (max-width:1200px){
      width: 100%;

    }
    
   

   
`
const PlayListItemBox = styled(ItemLayout)`
    flex-direction: row;
    padding-left: 0px;
    color: #6633cc;
    font-weight: 900;
    margin-right: 10px;
   
`

const PlayListItem = styled.li`
margin-left: 5px;
`
const PlayListImage = styled(Image)`
  height:50px;
  width:50px;
`

const PlayListItems = () => {
  return (
    <PlayListItemsLayout>
      <PlayListItemBox>
        <PlayListItem>1</PlayListItem>
        <PlayListImage />
        <PlayListItem>아이유</PlayListItem>
      </PlayListItemBox>
      <PlayListItemBox>
        <PlayListItem>좋은날</PlayListItem>
      </PlayListItemBox>
      <PlayListItemBox>
        <PlayListItem><FontAwesomeIcon icon={faCirclePlay} size={'2x'} /></PlayListItem>
        <PlayListItem><FontAwesomeIcon icon={faCircleCheck} size={'2x'} /></PlayListItem>
      </PlayListItemBox>
    </PlayListItemsLayout>
  )
}
export default PlayListItems