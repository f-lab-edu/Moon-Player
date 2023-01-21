import styled from 'styled-components';
import { StyledProps } from 'types/app/style';

interface ButtonProps extends StyledProps {
  fontColor?: string;
}

export const Button = styled.button<ButtonProps>(
  ({ color, fontSize, fontColor }) => `
  font-size: ${fontSize};
  background-color:${color};
  color: ${fontColor};
  font-weight: 700;
  box-shadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px';

  &:hover {
    cursor: pointer;
    opacity:0.7;
  }
`
);
export default Button;
