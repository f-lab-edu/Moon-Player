import styled from "styled-components"
import MusicPlayerList from "./MusicPlayerList"
import MusicPlayerListFooter from './MusicPlayerListFooter';
const Container = styled.div`
   margin-left: 10px;
`

const MusicPlayer = () => {
    return (
        <Container>
            <MusicPlayerList />
            <MusicPlayerListFooter/>
        </Container>
    
    )
}

export default MusicPlayer