import styled from 'styled-components';

export const IconButton = styled.button(
  ({ active, color }) => `
background: none;
border:0;
cursor:pointer;
color: ${color};
pointer-events:${active ? 'none' : 'auto'};
opacity:${active ? 0.5 : 1};
&:hover {
  transform: scale(1.3);
}
`
);

IconButton.defaultProps = {
  active: false,
  color: 'white',
};
export default IconButton;
