import styled from "styled-components"
import MusicPlayerMainContent from "./MusicPlayerMainContent"
import MusicPlayerMainFooter from "./MusicPlayerMainFooter";



const MusicPlayerLayout = styled.div`
margin-left: 20px;

`

const MusicPlayer = () => {
  return (
    <MusicPlayerLayout>
      <MusicPlayerMainContent />
      <MusicPlayerMainFooter />
    </MusicPlayerLayout>

  )
}

export default MusicPlayer