import styled from "styled-components"
import MusicList from "./MusicList/MusicList"

const Container=styled.main`
    display: flex;
    flex-direction:row;
`
const Box=styled.div`
    

`


const MusicMain = () => {
    return (
        <Container>
            <MusicList/>
            <Box>
                플레이어부분
            </Box>

        </Container>
    )
}
export default MusicMain