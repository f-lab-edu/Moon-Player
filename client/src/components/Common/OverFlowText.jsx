import styled from 'styled-components';

export const OverFlowText = styled.div(
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
OverFlowText.propTypes = {
  width: '50%',
  fontSize: '15px',
  color: 'white',
  weight: '700',
  align: 'start',
  cursor: 'default',
};

export default OverFlowText;
