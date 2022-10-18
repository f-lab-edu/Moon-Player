import styled from 'styled-components'
const Image = styled.div(({ img }) => `
    margin: 0px 15px;
    background: url('${img}') center center / cover no-repeat;
    position: absolute; top:0; left: 0;
    width:100%; 
    height:100%;
    object-fit:cover;

`)
export default Image