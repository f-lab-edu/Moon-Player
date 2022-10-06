import styled from "styled-components"
import MusicNavList from "./MusicNavList"

const Container = styled.nav`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
text-align: center;
 font-size :30px;
 color: #6633cc;
 font-weight: 900;
 margin-left: 15px;
`


const MusicNav = () => {
  return (
    <Container>
      <Title>인기차트</Title>
      <MusicNavList />
    </Container>
  )
}

export default MusicNav