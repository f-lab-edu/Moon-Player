import styled from 'styled-components';

type IconProps = {
  name: string;
  width: string;
  height: string;
};

const getSocialIconByName = (name: string) =>
  name === 'Google' ? 'images/googleLogo.svg' : name === 'Kakao' ? 'images/kakaoLogo.svg' : 'images/NaverLogo.png';

export const Icon = styled.img.attrs<IconProps>(({ name }) => ({
  src: getSocialIconByName(name),
}))<IconProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: 100%;
  object-fit: fill;
`;

export default Icon;
