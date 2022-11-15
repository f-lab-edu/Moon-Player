import styled from 'styled-components';

type ButtonProps = {
  color: string;
  fontSize: string;
  fontColor: string;
  width?: string;
  height?: string;
  shadow?: string;
  fontWeight?: string;
  radius?: string;
  margin?: string;
  border?: string;
};

export const Button = styled.button<ButtonProps>(
  ({ color, fontSize, width, height, shadow, fontWeight, radius, margin, fontColor, border }) => `
  width: ${width};
  height: ${height};
  font-size: ${fontSize};
  background-color:${color};
  font-weight: ${fontWeight};
  box-shadow: ${shadow};
  border-radius: ${radius};
  color: ${fontColor};
  margin:${margin};
  border: ${border};

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
  shadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  fontSize: '16px',
  fontWeight: '700',
};

export default Button;
