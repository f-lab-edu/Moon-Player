import styled from 'styled-components';

export const Button = styled.button(
  ({ color, fontColor, theme, width, height }) => `
  width: ${width};
  height: ${height};
  font-size: ${theme.fontSizes.base};
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

export default Button;
