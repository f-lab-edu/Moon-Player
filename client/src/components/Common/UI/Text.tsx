import styled from 'styled-components';
import { StyledProps } from 'types/app';
export const Text = styled.h3<StyledProps>(
  ({ color, textAlign, fontSize }) => `
  color:${color};
  text-align:${textAlign};
  font-size:${fontSize}
  weight:700;
`
);
Text.defaultProps = {
  color: 'white',
  textAlign: 'start',
  fontSize: '16px',
};

export default Text;
