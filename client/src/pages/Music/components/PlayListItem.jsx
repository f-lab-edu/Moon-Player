import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from 'components/items/Image';

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(0,0,0,0.1);
    width: 700px;
    height: 50px;
    border-left:none;
    border-right:none;
    border-bottom: none;

    @media screen and (max-width:1200px){
      width: 100%;

    }
 
`
const Box = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding-left: 0px;
    color: #6633cc;
    font-weight: 900;
    margin-right: 10px;  
`
const Wrapper = styled.li`
margin-left: 5px;
`
const PlayListImage = styled(Image)`
  height:50px;
  width:50px;
`

const PlayListItem = () => {
  return (
    <Layout>
      <Box>
        <Wrapper>1</Wrapper>
        <PlayListImage />
        <Wrapper>아이유</Wrapper>
      </Box>
      <Box>
        <Wrapper>좋은날</Wrapper>
      </Box>
      <Box>
        <Wrapper><FontAwesomeIcon icon={faCirclePlay} size={'2x'} /></Wrapper>
        <Wrapper><FontAwesomeIcon icon={faCircleCheck} size={'2x'} /></Wrapper>
      </Box>
    </Layout>
  )
}
export default PlayListItem