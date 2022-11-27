import styled from 'styled-components';

import { StyledProps } from 'types/app';

interface AvatarProps extends StyledProps {
  img: string;
}

export const Avatar = styled.img.attrs<AvatarProps>(({ img }) => ({
  src: AvatarImage[img],
}))<AvatarProps>`
  /* default 설정 */
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  /* 공통 속성 */
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  transform: scale(1.2);
`;
interface Image {
  [key: string]: string;
}
const AvatarImage: Image = {
  logo: 'images/Loginlogo.png',
};
export default Avatar;
