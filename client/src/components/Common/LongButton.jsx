import styled from 'styled-components';

export const LongButton = styled.button(
  ({ color, fontColor, theme }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 60px;
  font-size: ${theme.fontSizes.base};
  margin: 15px 0px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color:${color};
  font-weight: ${theme.fontWeights.bold};
  box-shadow: ${theme.boxShadows.one};
  border-radius: ${theme.borderRadius.base};
  color: ${fontColor};
  &:hover {
    cursor: pointer;
    opacity:0.7;
  }
`
);

export default LongButton;
