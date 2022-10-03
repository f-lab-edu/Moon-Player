import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCirclePlay,faCircleCheck} from "@fortawesome/free-solid-svg-icons";

const Container=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(0,0,0,0.3);
    list-style: none;
    width: 800px;
    height: 50px;
    border-left:none;
    border-right:none;
    border-bottom: none;


`

const Box=styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding-left: 0px;
    color: #6633cc;
    font-weight: 900;
`
const Item = styled.li`
margin-left: 5px;

`
const Image = styled.div`
    margin: 0px 15px;
    width: 40px;
    height: 40px;
    background-image: url("http://image.cine21.com/resize/cine21/article/2022/0603/15_30_27__6299aa83cb210[W578-].jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
`

const MusicListItem = () => {
    return (
          <Container>
            <Box>
                <Item>1</Item>
                <Image/>
                <Item>아이유</Item>
            </Box>
            <Box>
            <Item>좋은날</Item>
            </Box>
            <Box>
                <Item><FontAwesomeIcon icon={faCirclePlay} size={"2x"} /></Item>
                <Item><FontAwesomeIcon icon={faCircleCheck} size={"2x"}/></Item>
            </Box>
            </Container>
    )
}
export default MusicListItem