import styled from 'styled-components';

export const Icon = styled.img.attrs(({ name }) => ({
  src: name === 'Google' ? 'images/googleLogo.svg' : name === 'Kakao' ? 'images/kakaoLogo.svg' : 'images/NaverLogo.png',
}))`
  max-width: 100%;
  object-fit: fill;
`;

export default Icon;
