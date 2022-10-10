import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, } from '@fortawesome/free-solid-svg-icons';
import Image from 'components/items/Image';

const MusicTitle = styled.h3`
    font-size: 15px;
    margin: 1px;
    font-weight: 900;
`
const ItemImage = styled(Image)`
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
`
const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

// 재사용 가능
const Item = () => {
  return (
    <>
      <Layout>
        <Box>
          <ItemImage />
          <div>
            <MusicTitle>노래 : 좋은날</MusicTitle>
            <MusicTitle>가수 : 아이유 </MusicTitle>
          </div>
        </Box>
        <FontAwesomeIcon icon={faClose} size={'2x'} color={'#6633cc'} />
      </Layout>

    </>

  )
}
export default Item