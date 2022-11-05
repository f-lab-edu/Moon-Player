import styled from 'styled-components';

export const OverFlowText = styled.div(
  ({ width, fontSize, color }) => `
  width: ${width};
  font-size:${fontSize};
  color:${color};
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 900;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`
);

export default OverFlowText;
