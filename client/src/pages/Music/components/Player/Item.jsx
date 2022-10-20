import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Title = styled.h3`
    font-size: 15px;
    margin: 1px;
    font-weight: 900;
`
const Image = styled.img(({ url }) => `
console.log(url)


`)

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
const Item = (({ title, image, video_id }) => {
  return (
    <Layout>
      <Box>
        <Image url={image} />
        <div>
          <Title>{title}</Title>
        </div>
      </Box>
      <FontAwesomeIcon icon={faTrash} size={'2x'} color={'#6633cc'} />
    </Layout>
  )
})
export default Item