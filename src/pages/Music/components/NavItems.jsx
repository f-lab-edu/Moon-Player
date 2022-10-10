import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import Card from '../../../components/items/Card';
import Layout from 'components/items/Layout';

const NavLayout = styled(Layout)`
  
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


    @media screen and (max-width:1000px){
    flex-direction: column;
    width: 100%;
    gap:10px 
    }

    
    
  
`

const NavCard = styled(Card)`
box-shadow: 2px 1px 10px 1px rgba(133, 99, 99, 0.3);
color: #6633cc;
font-weight :900;
@media screen and (max-width:1000px){
  border-radius: 7px;
  font-size: 25px;
  font-weight:bold;
  width:90%;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.2);
}
`

const NavItems = () => {
  return (
    <NavLayout>
      <NavCard>해외 랩/힙합</NavCard>
      <NavCard>해외 랩/힙합</NavCard>
      <NavCard>해외 랩/힙합</NavCard>
      <NavCard>해외 랩/힙합</NavCard>
      <NavCard>해외 랩/힙합</NavCard>
      <NavCard>해외 랩/힙합</NavCard>
      <FontAwesomeIcon icon={faCircleArrowRight} size={'2x'} color={'#6633cc'} />

    </NavLayout >
  )
}
export default NavItems