import styled from 'styled-components';

export const IconButton = styled.button(
  ({ disabled, isActive, theme }) => `
background: none;
border:0px;
padding:2px;
cursor:pointer;
color:${isActive ? theme.colors.Magenta : theme.colors.blueMagent};
pointer-events:${disabled ? 'none' : 'auto'};
opacity:${disabled ? 0.5 : 1};
&:hover {
  transform: scale(1.3);
  color: ${theme.colors.white};
}
`
);

export default IconButton;
