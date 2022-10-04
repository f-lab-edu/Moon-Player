import styled from "styled-components"
import MusicPlayListItem from './MusicPlayListItem';
import MusicPlayListHeader from "./MusicPlayListHeader";


const Container=styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    padding-left: 0px;
    color: #6633cc;
    flex-wrap: wrap;
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



const MusicPlayerList = () => {
    return (
        <Container>
            <MusicPlayListHeader/>
            <MusicPlayListItem />
            <MusicPlayListItem />
            <MusicPlayListItem />
            <MusicPlayListItem />

            <MusicPlayListItem />
            <MusicPlayListItem />

            <MusicPlayListItem />

            <MusicPlayListItem />


        </Container>
    )
}
export default MusicPlayerList