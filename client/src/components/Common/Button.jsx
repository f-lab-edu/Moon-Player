import styled from 'styled-components';

export const Button = styled.button(
  ({ color, fontColor, fontSize, width, height, shadow, fontWeight, border, margin }) => `
  width: ${width};
  height: ${height};
  font-size: ${fontSize};
  border:${border};
  background-color:${color};
  font-weight: ${fontWeight};
  box-shadow: ${shadow};
  border-radius: ${border};
  color: ${fontColor};
  margin:${margin};
  &:hover {
    cursor: pointer;
    opacity:0.7;
  }
`
);
Button.defaultProps = {
  width: '50px',
  height: '50px',
  color: 'white',
  fontColor: 'black',
  shadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  fontSize: '16px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  fontWeight: '700',
};

export default Button;
