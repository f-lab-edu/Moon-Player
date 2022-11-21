import styled from 'styled-components';
import { StyledProps } from 'types/app';
const IconName: IconName = {
  Google: 'images/googleLogo.svg',
  Kakao: 'images/kakaoLogo.svg',
  Naver: 'images/NaverLogo.png',
};

interface IconName {
  [key: string]: string;
}

interface IconProps extends StyledProps {
  name: string;
}
export const Icon = styled.img.attrs<IconProps>(({ name }) => ({
  src: IconName[name],
}))<IconProps>`
  max-width: 100%;
  object-fit: fill;
`;

export default Icon;
