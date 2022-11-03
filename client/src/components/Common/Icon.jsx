import styled from 'styled-components';

export const Icon = styled.img.attrs(({ name }) => ({
  src: name === 'Google' ? 'images/googleLogo.svg' : name === 'Kakao' ? 'images/kakaoLogo.svg' : 'images/NaverLogo.png',
}))`
  position: absolute;
  max-width: 100%;
  left: 0;
  margin-left: 10px;
  height: 30px;
  width: 30px;
  object-fit: fill;
`;

export default Icon;
