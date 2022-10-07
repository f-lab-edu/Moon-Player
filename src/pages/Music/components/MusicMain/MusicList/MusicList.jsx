import styled from "styled-components"
import MusicListItem from "./MusicListItem"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    height:50vh;
    &::-webkit-scrollbar {
          display: none;
    }

`
const Title=styled.h3`
    color:white;
`
const MusicList = () => {
    return (
        <Container>
            <Title>해외 랩/힙합</Title>
            <MusicListItem/>
            <MusicListItem/>
            <MusicListItem/>
            <MusicListItem />
            <MusicListItem/>
            <MusicListItem/>
            <MusicListItem/>
            <MusicListItem />
        </Container>
    )
}

export default MusicList