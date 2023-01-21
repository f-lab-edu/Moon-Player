import styled from 'styled-components';
import { StyledProps } from 'types/app/style';

export const OverFlowText = styled.div<StyledProps>(
  ({ width = '50%', fontSize = '16px', color = 'white', textAlign = 'start', cursor = 'default' }) => `
  width: ${width};
  font-size:${fontSize};
  color:${color};
  font-weight: 700;
  text-align:${textAlign};
  cursor: ${cursor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
);

export default OverFlowText;
