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
  font-weight: bold;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  color: ${fontColor};
  &:hover {
    cursor: pointer;
    opacity:0.6;
  }
  &:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
  }
`
);

export default LongButton;
