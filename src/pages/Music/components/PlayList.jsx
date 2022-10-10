import styled from 'styled-components'
import Title from '../../../components/items/Title';
import PlayListItems from './PlayListItems';

const PlayListLayout = styled.div`
    display: flex;
    flex-direction: column;
    height: 49vh;
    overflow: scroll;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
    
    &::-webkit-scrollbar {
          display: none;
    }
`
const PlayListTitle = styled(Title)`
  font-size:20px;
  color: white;
`
const PlayList = () => {
  return (
    <PlayListLayout>
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
    </PlayListLayout>
  )
}

export default PlayList