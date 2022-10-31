import styled from 'styled-components';

const IconButton = styled.button(
  ({ disabled, isActive }) => `
background: none;
border:0px;
padding:2px;
cursor:pointer;
color:${isActive ? '#FA7CD7' : '#6633cc'};
pointer-events:${disabled ? 'none' : 'auto'};
opacity:${disabled ? 0.5 : 1};
&:active{
  transform: translateY(4px);
}
&:hover{
  color: white;
}
`
);

export default IconButton;
