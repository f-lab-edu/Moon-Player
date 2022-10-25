import styled from 'styled-components';

const SmallButton = styled.button(({ disabled }) => `
background: none;
border:0px;
padding:2px;
cursor:pointer;
color:#6633cc;
pointer-events:${disabled ? 'none' : 'auto'}; 
opacity:${disabled ? 0.5 : 1};

&:active{
      transform: translateY(4px);
}
&:hover{  
color:white;
}

`)

export default SmallButton