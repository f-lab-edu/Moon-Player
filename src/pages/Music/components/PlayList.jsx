import styled from 'styled-components'
import Title from '../../../components/items/Title';
import PlayListItems from './PlayListItems';

const PlayListLayout = styled.div`
    display: flex;
    flex-direction: column;
    height: 47vh;
    overflow: scroll;
    border-radius: 7px;
    box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
    
    &::-webkit-scrollbar {
          display: none;
    }
    @media screen and (max-width:1200px){
      width: 100%;
    }

  
`
const PlayListTitle = styled(Title)`
  font-size:20px;

  color: white;
`
const PlayListBox = styled.div`

  padding: 20px;
  height:inherit;
`
const PlayList = () => {
  return (
    <PlayListLayout>
      <PlayListBox>
        <PlayListTitle>해외 랩/힙합</PlayListTitle>
        <PlayListItems />
        <PlayListItems />
        <PlayListItems />
        <PlayListItems />
        <PlayListItems />
        <PlayListItems />
        <PlayListItems />
        <PlayListItems />
        <PlayListItems />
        <PlayListItems />
        <PlayListItems />
      </PlayListBox>
    </PlayListLayout>
  )
}

export default PlayList