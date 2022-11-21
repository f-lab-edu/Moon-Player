import styled from 'styled-components';
import { StyledProps } from 'types/app';

export const OverFlowText = styled.div<StyledProps>(
  ({ width, fontSize, color, textAlign, cursor }) => `
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
OverFlowText.defaultProps = {
  width: '50%',
  fontSize: '15px',
  color: 'white',
  textAlign: 'start',
  cursor: 'default',
};

export default OverFlowText;
