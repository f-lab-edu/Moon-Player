import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:1000px){
    flex-direction: column;
    gap:10px 
    }    
  
`

const Card = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 150px;
height: 100px;
box-sizing: border-box;
margin: 0px 10px;
border-radius: 30px;
border: 1px solid rgba(0,0,0,0.3);
box-shadow: 2px 1px 10px 1px rgba(133, 99, 99, 0.3);
color: #6633cc;
font-weight :900;
@media screen and (max-width:1000px){
  border-radius: 7px;
  font-size: 25px;
  font-weight:bold;
  width:90vw;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.2);
}
`

const NavItems = () => {
  return (
    <Layout>
      <Card>해외 랩/힙합</Card>
      <Card>해외 랩/힙합</Card>
      <Card>해외 랩/힙합</Card>
      <Card>해외 랩/힙합</Card>
      <Card>해외 랩/힙합</Card>
      <Card>해외 랩/힙합</Card>
      <FontAwesomeIcon icon={faCircleArrowRight} size={'2x'} color={'#6633cc'} />

    </Layout >
  )
}
export default NavItems