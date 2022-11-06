import styled from 'styled-components';

export const Text = styled.span(
  ({ color, fontSize, weight }) => `
  color:${color};
  font-size:${fontSize};
  font-weight:${weight};
`
);
Text.defaultProps = {
  color: 'white',
  fontSize: '30px',
  weight: '700',
};

export default Text;
