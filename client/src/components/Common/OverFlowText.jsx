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

OverFlowText.propTypes = {
  width: '50%',
  fontSize: '15px',
  color: 'white',
};

export default OverFlowText;
