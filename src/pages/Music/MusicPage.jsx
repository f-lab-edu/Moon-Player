import styled from "styled-components";
import MusicHeader from "./components/MusicHeader/MusicHeader";
import MusicNav from "./components/MusicNav/MusicNav";
import MusicMain from "./components/MusicMain/MusicMain";


const Container=styled.div`
  display: flex;
  flex-direction: column;

  padding: 0px 15px;

  background-color: black;

`

const MusicPage = () => {
  return <Container>
    <MusicHeader />
    <MusicNav />
    <MusicMain />
  </Container>
};

export default MusicPage;
