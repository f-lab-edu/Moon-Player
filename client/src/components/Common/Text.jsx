import styled from 'styled-components';

export const Text = styled.span(
  ({ color, size }) => `
  color:${color};
  font-size:${size};
`
);

export default Text;
