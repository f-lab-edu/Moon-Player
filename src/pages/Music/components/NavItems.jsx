import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import Card from '../../../components/items/Card';
import Layout from 'components/items/Layout';

const NavLayout = styled(Layout)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const NavCard = styled(Card)`
box-shadow: 2px 1px 10px 1px rgba(133, 99, 99, 0.3);
color: #6633cc;
font-weight :900;
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
    </NavLayout>
  )
}
export default NavItems