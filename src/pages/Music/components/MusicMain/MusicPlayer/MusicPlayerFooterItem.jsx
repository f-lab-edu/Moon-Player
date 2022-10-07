import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle,faForwardStep,faBackwardStep} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: inherit;


`
const Wrapper=styled.div`
`
const WrpperIcon=styled.div`
    >svg{
        margin: 3px;
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
    width: 60px;
    height: 70px;
    background-image: url("http://image.cine21.com/resize/cine21/article/2022/0603/15_30_27__6299aa83cb210[W578-].jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
`

const MusicPlayerFooterItem = () => {
    return (
        <>
            <Container>    
                <MusicInfoBox>
                    <Image />
                    <Wrapper>
                    <MusicInfo>노래 : 좋은날</MusicInfo>
                    <MusicInfo>가수 : 아이유 </MusicInfo>
                    </Wrapper>
                </MusicInfoBox>
                <WrpperIcon>
                
                    <FontAwesomeIcon icon={faBackwardStep} size={"2x"} color={"#6633cc"} />
                <FontAwesomeIcon icon={faPlayCircle} size={"2x"} color={"#6633cc"} />
                    <FontAwesomeIcon icon={faForwardStep} size={"2x"} color={"#6633cc"} />
                    
                </WrpperIcon>
            </Container>
        </> 
        
        )       
}
            
export default MusicPlayerFooterItem