import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from 'components/items/Title';
import { faShuffle, faBackwardStep, faPlayCircle, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import Progressbar from 'components/items/Progressbar';
import Image from 'components/items/Image';

const Box = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: inherit;


`
const IconBox = styled.div`
    display: flex;
    align-items: center;

    >svg{
      margin:3px;
    }
    >:last-child{
      margin:10px;
    }
`
const PlayingInfoBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
   
`
const PlayingTitle = styled(Title)`
    font-size: 15px;
    color:white;
    margin: 1px;
    font-weight: 900;
`
const PlayingImage = styled(Image)`
    margin: 0px 10px 1px 0px;
    width: 60px;
    height: 70px;
`
const Footer = () => {
  return (
    <footer>
      <Progressbar />
      <Box>
        <PlayingInfoBox>
          <PlayingImage />
          <div>
            {/* <PlayingTitle>노래 : 좋은날</PlayingTitle> */}

          </div>
        </PlayingInfoBox>
        <IconBox>
          <FontAwesomeIcon icon={faBackwardStep} size={'2x'} color={'#6633cc'} />
          <FontAwesomeIcon icon={faPlayCircle} size={'2x'} color={'#6633cc'} />
          <FontAwesomeIcon icon={faForwardStep} size={'2x'} color={'#6633cc'} />
          <div>
            <FontAwesomeIcon icon={faShuffle} size={'2x'} color={'#6633cc'} />
          </div>
        </IconBox>
      </Box>
    </footer>

  )
}

export default Footer