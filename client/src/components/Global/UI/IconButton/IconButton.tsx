import styled from 'styled-components';
import { StyledProps, FontAwesomeIcons } from 'types/app';
import { forwardRef } from 'react';
import Icon from 'components/Global/UI/Icon/Icon';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
type Icontype = keyof typeof FontAwesomeIcons;

interface IconButtonProps extends StyledProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
  className?: string;
  ref?: HTMLButtonElement;
  name: Icontype;
  size: FontAwesomeIconProps['size'];
  color: string;
}
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ onClick, name, size, color, active, className }, ref) => {
    return (
      <Button ref={ref} className={className} onClick={onClick} active={active}>
        <Icon name={name} size={size} color={color} />
      </Button>
    );
  }
);
IconButton.displayName = 'IconButton';
interface ButtonProps {
  active?: boolean;
}
const Button = styled.button<ButtonProps>(
  ({ active = false }) => `
background: none;
border:0;
cursor:pointer;
pointer-events:${active ? 'none' : 'auto'};
opacity:${active ? 0.5 : 1};
&:hover {
  transform: scale(1.16);
}
`
);
export default IconButton;
