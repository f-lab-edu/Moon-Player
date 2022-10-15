import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import Card from '../../../../../components/items/Card';
import Layout from 'components/items/Layout';

const MusicNavLayout = styled(Layout)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const MusicNavCard = styled(Card)`
box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
color: #6633cc;
font-weight :900;
`

const MusicPageNavItems = () => {
  return (
    <MusicNavLayout>
      <MusicNavCard>해외 랩/힙합</MusicNavCard>
      <MusicNavCard>해외 랩/힙합</MusicNavCard>
      <MusicNavCard>해외 랩/힙합</MusicNavCard>
      <MusicNavCard>해외 랩/힙합</MusicNavCard>
      <MusicNavCard>해외 랩/힙합</MusicNavCard>
      <MusicNavCard>해외 랩/힙합</MusicNavCard>
      <FontAwesomeIcon icon={faCircleArrowRight} size={'2x'} color={'#6633cc'} />
    </MusicNavLayout>
  )
}
export default MusicPageNavItems