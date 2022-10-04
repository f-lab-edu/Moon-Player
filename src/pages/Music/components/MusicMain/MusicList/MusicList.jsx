import styled from "styled-components"
import MusicListItem from "./MusicListItem"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 40vh;
    overflow: scroll;
    &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    }

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