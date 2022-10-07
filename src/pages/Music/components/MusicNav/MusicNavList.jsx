import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const Card = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 150px;
height: 100px;
box-sizing: border-box;
margin: 0px 10px;
border-radius: 20px;
background-color: white;
border: 1px solid rgba(0,0,0,0.3);
color: #6633cc;
font-weight :900;
`

const MusicNavList = () => {
    return (
        <Container>
            
            <Card>해외 랩/힙합</Card>
            <Card>해외 랩/힙합</Card>
            <Card>해외 랩/힙합</Card>
            <Card>해외 랩/힙합</Card>
            <Card>해외 랩/힙합</Card>

            <Card>해외 랩/힙합</Card>


            <FontAwesomeIcon icon={faCircleArrowRight} size={"2x"} color={"#6633cc"}/> 
        </Container>
    )
}
export default MusicNavList