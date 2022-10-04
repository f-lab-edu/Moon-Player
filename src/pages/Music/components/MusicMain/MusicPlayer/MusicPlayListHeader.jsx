import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";


const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: inherit;
border: 1px solid white;
border-left: none;
border-right: none;
>:last-child{
    margin-right: 10px;
}
padding-left: 10px;
`
const PlayerInfo=styled.h3`
    font-size: 20px;
    font-weight: 900;
`


const MusicPlayListHeader = () => {
    return (
         <>
            <Container>    
                <PlayerInfo>모두 셔플</PlayerInfo>
                <FontAwesomeIcon icon={faShuffle} size={"2x"} color={"#6633cc"} />
                    
            </Container>
        </> 
    )
}

export default MusicPlayListHeader