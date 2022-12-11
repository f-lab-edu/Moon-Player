import styled from 'styled-components';
type SocialIconNames = 'Google' | 'Kakao' | 'Naver';
type SocialIconsType = {
  [key in SocialIconNames]: string;
};

interface IconProps {
  name: SocialIconNames;
}
export const Icon = styled.img.attrs<IconProps>(({ name }: IconProps) => ({
  src: Icons[name],
}))<IconProps>`
  max-width: 100%;
  object-fit: fill;
`;

const Icons: SocialIconsType = {
  Google: 'images/googleLogo.svg',
  Kakao: 'images/kakaoLogo.svg',
  Naver: 'images/NaverLogo.png',
};
export default Icon;
