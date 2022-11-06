import styled from 'styled-components';

export const Icon = styled.img.attrs(({ name }) => ({
  src: name === 'Google' ? 'images/googleLogo.svg' : name === 'Kakao' ? 'images/kakaoLogo.svg' : 'images/NaverLogo.png',
}))`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: 100%;
  object-fit: fill;
`;

Icon.defaultProps = {
  width: '30px',
  height: '30px',
};

export default Icon;
