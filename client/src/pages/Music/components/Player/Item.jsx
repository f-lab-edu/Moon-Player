import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Layout = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(0,0,0,0.1);
gap:20px;
text-align: center;

>:last-child{
  cursor:pointer;
  transition: all 0.3s linear;
  &:hover{
    color:white;
  }
  &:active{
    transform: translateY(4px);
  }
}
@media screen and (max-width:1000px){
  width: 100%; 
}
`

const Title = styled.h3`
  font-size: 15px;
  width:300px;  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 
  font-weight: 900;
  @media screen and (max-width:1000px){
  width: 100%; 
  }

    
`
const Image = styled.img(({ img }) => `
width:150px;
height:50px;

cursor:pointer;
background: url('${img}') center center / cover no-repeat;
background-size: cover;
background-position: center;

box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`)

// 재사용 가능
const Item = (({ title, image, video_id }) => {
  return (
    <Layout>
      <Image img={image} />
      <Title>{title}</Title>

      <FontAwesomeIcon icon={faTrash} size={'2x'} color={'#6633cc'} />
    </Layout>
  )
})
export default Item