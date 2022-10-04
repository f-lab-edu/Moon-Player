import styled from "styled-components"
import MusicList from "./MusicList/MusicList"
import MusicPlayer from "./MusicPlayer/MusicPlayer"

const Container=styled.main`
    display: flex;
    flex-direction:row;
    align-items: center;
    padding: 10px;
    margin-top: 40px;

`


const MusicMain = () => {
    return (
        <Container>
            <MusicList/>
            <MusicPlayer/>

        </Container>
    )
}
export default MusicMain