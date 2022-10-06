import styled from "styled-components"
// import Layout from "components/items/Layout"
import Title from "../../../../../components/items/Title";
import MusicMainPlayListItem from "./items/MusicMainPlayListItem";


const MusicMainPlayListLayout = styled.div`
    display: flex;
    flex-direction: column;
    height: 50vh;
    overflow: scroll;
    
    &::-webkit-scrollbar {
          display: none;
    }
`
const MusicListTitle = styled(Title)`
  font-size:20px;
  color: black;
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