import styled from 'styled-components';
import { StyledProps } from 'types/app/style';
export const Text = styled.h3<StyledProps>(
  ({ color = 'white', textAlign = 'start', fontSize = '16px' }) => `
  color:${color};
  text-align:${textAlign};
  font-size:${fontSize}
  weight:700;
`
);

export default Text;
