import styled from "styled-components"
import MusicListItem from "./MusicListItem"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    padding:10px;
    height: 40vh;
    overflow: scroll;

`
const MusicList = () => {
    return (
        <Container>
            <MusicListItem/>
            <MusicListItem/>
            <MusicListItem/>
            <MusicListItem />
            <MusicListItem/>
            <MusicListItem/>
            <MusicListItem/>
            <MusicListItem/>
        </Container>
    )
}

export default MusicList