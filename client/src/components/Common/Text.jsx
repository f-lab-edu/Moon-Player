import styled from 'styled-components';

export const Text = styled.span(
  ({ error, primary, info }) => `
  color: ${error && 'red'};
  color: ${primary && 'black'};
`
);
