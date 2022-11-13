import styled from 'styled-components';

type AvatarProps = {
  src: string;
  height: string;
  width: string;
  margin?: string;
};
export const Avatar = styled.img.attrs<AvatarProps>(({ src }) => ({
  src: src,
}))<AvatarProps>`
  /* default 설정 */
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};

  /* 공통 속성 */
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  transform: scale(1.2);
`;
export default Avatar;
