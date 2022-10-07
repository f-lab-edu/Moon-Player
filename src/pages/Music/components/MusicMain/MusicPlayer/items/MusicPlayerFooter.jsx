import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faForwardStep, faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import Image from "components/items/Image";
import Title from "components/items/Title";

const MusicPlayerFooterLayout = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: inherit;
`
const IconBox = styled.div`
    >svg{
        margin: 3px;
    }
`
const MusicInfoBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
   
`
const MusicTitle = styled(Title)`
    font-size: 15px;
    color:white;
    margin: 1px;
    font-weight: 900;
`
const MusicPlayerImage = styled(Image)`
    margin: 0px 10px 1px 0px;
    width: 60px;
    height: 70px;
`


const MusicPlayerFooter = () => {
  return (
    <>
      <MusicPlayerFooterLayout>
        <MusicInfoBox>
          <MusicPlayerImage />
          <div>
            <MusicTitle>노래 : 좋은날</MusicTitle>
            <MusicTitle>가수 : 아이유 </MusicTitle>
          </div>
        </MusicInfoBox>
        <IconBox>
          <FontAwesomeIcon icon={faBackwardStep} size={"2x"} color={"#6633cc"} />
          <FontAwesomeIcon icon={faPlayCircle} size={"2x"} color={"#6633cc"} />
          <FontAwesomeIcon icon={faForwardStep} size={"2x"} color={"#6633cc"} />
        </IconBox>
      </MusicPlayerFooterLayout>
    </>

  )
}

export default MusicPlayerFooter