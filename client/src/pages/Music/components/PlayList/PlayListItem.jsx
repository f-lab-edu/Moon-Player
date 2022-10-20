import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(0,0,0,0.1);
    color: #6633cc;
    font-weight: 900;
    width: 700px;
    height: 50px;
    border-left:none;
    border-right:none;
    border-bottom: none;
  
    gap:10px;
    >div:nth-of-type(1){
      width:10px;
    }
    

    >div:nth-of-type(2){
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
       width:300px;
    }

    >div:nth-of-type(3){
      display: flex;
      justify-content: center;
      align-items: center;
      >svg{
        margin-left: 3px;
        cursor: pointer;
        transition: 0.3s;
        &:active{
          margin-left: 5px;
          margin-top:5px;
        }
        &:hover{
          color:white;
        }
      
      }
    }
    

    @media screen and (max-width:1200px){
      width: 100%;

    }
 
`

const Image = styled.img(({ img }) => `
    
    background: url('${img}') no-repeat;
    background-size: cover;
    background-position: center;
    width:100px;
    height:50px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;


`)

const PlayListItem = ({ id, title, img, }) => {

  return (
    <Layout>
      <div>{id}</div>
      <Image img={img} />

      <div>{`${title}`}</div>
      <div>
        <FontAwesomeIcon icon={faCirclePlay} size={'2x'} />
        <FontAwesomeIcon icon={faCirclePlus} size={'2x'} />
      </div>
    </Layout>
  )
}

export default PlayListItem