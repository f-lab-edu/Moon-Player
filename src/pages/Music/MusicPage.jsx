import styled from "styled-components";
import MusicHeader from "./components/MusicHeader/MusicHeader";
import MusicNav from "./components/MusicNav/MusicNav";
import MusicMain from "./components/MusicMain/MusicMain";
import MusicFooter from "./components/MusicFooter/MusicFooter";


const Container=styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0px 15px;
  background-color: black;

`

const MusicPage = () => {
  return <Container>
    <MusicHeader />
    <MusicNav />
    <MusicMain />
    <MusicFooter/>  
  </Container>
};

export default MusicPage;
