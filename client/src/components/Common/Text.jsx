import styled from 'styled-components';

export const Text = styled.span(
  ({ theme }) => `
  color:${theme.colors.blueMagent};
  font-size:${theme.fontSizes.base};
  font-weight:${theme.fontWeights.bold};
`
);

export default Text;
