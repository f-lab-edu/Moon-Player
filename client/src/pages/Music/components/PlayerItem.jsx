import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, } from '@fortawesome/free-solid-svg-icons';
import Image from 'components/items/Image';

const Title = styled.h3`
    font-size: 15px;
    margin: 1px;
    font-weight: 900;
`
const PlayerItemImage = styled(Image)`
    margin: 0px 10px 1px 0px;
    width: 50px;
    height: 50px;
`
const Layout = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(0,0,0,0.1);
>:last-child{
    margin-right: 10px;
}
@media screen and (max-width:1000px){
      width: 100%; 
}

`
const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

// 재사용 가능
const PlayerItem = () => {
  return (
    <Layout>
      <Box>
        <PlayerItemImage />
        <div>
          <Title>노래 : 좋은날</Title>
          <Title>가수 : 아이유 </Title>
        </div>
      </Box>
      <FontAwesomeIcon icon={faClose} size={'2x'} color={'#6633cc'} />
    </Layout>
  )
}
export default PlayerItem