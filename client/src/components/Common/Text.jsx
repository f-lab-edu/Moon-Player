import styled from 'styled-components';

export const Text = styled.span(
  ({ color, fontSize, weight }) => `
  color:${color};
  font-size:${fontSize};
  font-weight:${weight};
`
);

export default Text;
