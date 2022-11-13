import styled from 'styled-components';

export const Text = styled.h3(
  ({ color, fontSize, weight, align, shadow }) => `
  color:${color};
  font-size:${fontSize};
  font-weight:${weight};
  text-align:${align};
  text-shadow: ${shadow};
`
);
Text.defaultProps = {
  color: 'white',
  fontSize: '20px',
  weight: '700',
  align: 'start',
};

export default Text;
