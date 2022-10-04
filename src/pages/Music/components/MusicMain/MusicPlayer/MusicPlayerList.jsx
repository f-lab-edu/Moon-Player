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
    height: 39vh;
    overflow: scroll;
      &::-webkit-scrollbar {
          display: none;
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