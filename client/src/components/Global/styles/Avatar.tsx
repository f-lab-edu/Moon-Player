import styled from 'styled-components';

type AvatarIconNames = 'logo';
type AvatarIconsType = {
  [key in AvatarIconNames]: string;
};
interface AvatarProps {
  img: AvatarIconNames;
}

export const Avatar = styled.img.attrs<AvatarProps>(({ img }) => ({
  src: AvatarIcons[img],
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

const AvatarIcons: AvatarIconsType = {
  logo: 'images/Loginlogo.png',
};
export default Avatar;
