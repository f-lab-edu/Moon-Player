import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Title = styled.h3`
    font-size: 15px;
    margin: 1px;
    font-weight: 900;
`
const Image = styled.image`
`
const Layout = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(0,0,0,0.1);
>:last-child{
    cursor: pointer;
        transition: 0.3s;
        &:active{
          margin-left: 5px;
          margin-top:5px;
        }
        &:hover{
          color:white;
        }
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
        <Image />
        <div>
          <Title>노래 : 좋은날</Title>
          <Title>가수 : 아이유 </Title>
        </div>
      </Box>
      <FontAwesomeIcon icon={faTrash} size={'2x'} color={'#6633cc'} />
    </Layout>
  )
}
export default PlayerItem