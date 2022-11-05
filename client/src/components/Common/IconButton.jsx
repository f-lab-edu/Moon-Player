import styled from 'styled-components';

export const IconButton = styled.button(
  ({ disabled, theme }) => `
background: none;
border:0;
cursor:pointer;
color: ${theme.colors.white};
pointer-events:${disabled ? 'none' : 'auto'};
opacity:${disabled ? 0.5 : 1};
&:hover {
  transform: scale(1.3);
}
`
);

export default IconButton;
