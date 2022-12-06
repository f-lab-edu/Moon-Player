import styled from 'styled-components';
type SocialIconNames = 'Google' | 'Kakao' | 'Naver';
type SocialIcons = {
  [key in SocialIconNames]: string | undefined;
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

const Icons: SocialIcons = {
  Google: 'images/googleLogo.svg',
  Kakao: 'images/kakaoLogo.svg',
  Naver: 'images/NaverLogo.png',
};
export default Icon;
