import styled from "styled-components"

import MusicPlayer from "./MusicPlayer/MusicPlayerMain"
import MusicMainPlayList from "./MusicPlayList/MusicMainPlayList";


const MusicPageMainLayout = styled.main`
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin: auto;
    border: 1px solid rgba(0,0,0,0.3);
`


const MusicPageMain = () => {
  return (
    <MusicPageMainLayout>
      <MusicMainPlayList />
      <MusicPlayer />
    </MusicPageMainLayout>
  )
}
export default MusicPageMain