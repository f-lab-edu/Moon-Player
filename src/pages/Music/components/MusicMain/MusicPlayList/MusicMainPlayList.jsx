import styled from "styled-components"
// import Layout from "components/items/Layout"
import Title from "../../../../../components/items/Title";
import MusicMainPlayListItem from "./items/MusicMainPlayListItem";


const MusicMainPlayListLayout = styled.div`
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
const MusicListTitle = styled(Title)`
  font-size:20px;
  color: white;
`
const MusicMainPlayList = () => {
  return (
    <MusicMainPlayListLayout>
      <MusicListTitle>해외 랩/힙합</MusicListTitle>
      <MusicMainPlayListItem />
      <MusicMainPlayListItem />
      <MusicMainPlayListItem />
      <MusicMainPlayListItem />
      <MusicMainPlayListItem />
      <MusicMainPlayListItem />
      <MusicMainPlayListItem />
      <MusicMainPlayListItem />
      <MusicMainPlayListItem />
      <MusicMainPlayListItem />
      <MusicMainPlayListItem />
    </MusicMainPlayListLayout>
  )
}

export default MusicMainPlayList