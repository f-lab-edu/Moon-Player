import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClose } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: inherit;
margin: 0px;
border-bottom: 1px solid white;

>:last-child{
    margin-right: 10px;
}
`
const MusicInfoBox=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
   
`
const MusicInfo=styled.h3`
    font-size: 15px;
    margin: 1px;
    font-weight: 900;
`
const Image = styled.div`
    margin: 0px 10px 1px 0px;
    width: 50px;
    height: 50px;
    background-image: url("http://image.cine21.com/resize/cine21/article/2022/0603/15_30_27__6299aa83cb210[W578-].jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
`

const MusicPlayListItem = () => {
    return (
        <>
            <Container>    
                <MusicInfoBox>
                    <Image />
                    <div>
                    <MusicInfo>노래 : 좋은날</MusicInfo>
                    <MusicInfo>가수 : 아이유 </MusicInfo>
                    </div>
                </MusicInfoBox>
                <FontAwesomeIcon icon={faClose} size={"2x"} color={"#6633cc"} />
                    
            </Container>
        </> 
        
        )       
}
            
export default MusicPlayListItem