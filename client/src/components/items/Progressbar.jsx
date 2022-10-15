import styled from 'styled-components'
const Progressbar = styled.div`
  width: 100%;
  height: 4px;
  background-color: yellow;
  
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  &-Progress {
    height: 100%;
    background-color: blue;
  }
    
`

export default Progressbar