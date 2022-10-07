import styled from "styled-components";
import Title from "components/items/Title";
import MusicHeaderContent from "./MusicHeaderContent";

const Container=styled.header`
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin: 0px 30px;
`
const MusicHeader = () => {
    return (
        <Container>
            <Title>Moon Player</Title>
            <MusicHeaderContent/>
        </Container>


    )
}

export default MusicHeader