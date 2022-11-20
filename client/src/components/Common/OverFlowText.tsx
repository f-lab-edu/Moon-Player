import styled, { CSSObject } from 'styled-components';
type OverFlowTextProps = {
  width: string;
  fontSize: string;
  color?: string;
  weight?: string;
  align?: CSSObject['textAlign'];
  cursor?: string;
};

export const OverFlowText = styled.div<OverFlowTextProps>(
  ({ width, fontSize, color, weight, align, cursor }) => `
  width: ${width};
  font-size:${fontSize};
  color:${color};
  font-weight: ${weight};
  text-align:${align};
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
  weight: '700',
  align: 'start',
  cursor: 'default',
};

export default OverFlowText;
