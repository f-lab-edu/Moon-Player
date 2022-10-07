import styled from "styled-components"
import MusicPlayerFooterItem from "./MusicPlayerFooterItem"
import Progressbar from "./items/Progressbar"
const Container=styled.div`
    color:white;

`

const MusicPlayerListFooter = () => {
    return (
        <Container>
            <Progressbar/>
            <MusicPlayerFooterItem/>
        </Container>
    )
}
export default MusicPlayerListFooter