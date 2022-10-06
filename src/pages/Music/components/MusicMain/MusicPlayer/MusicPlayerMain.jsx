import styled from "styled-components"
import MusicPlayerList from "./MusicPlayerList"
import MusicPlayerListFooter from "./MusicPlayerFooter";
const Container = styled.div`
margin-left: 15px;

`

const MusicPlayer = () => {
  return (
    <Container>
      <MusicPlayerList />
      <MusicPlayerListFooter />
    </Container>

  )
}

export default MusicPlayer