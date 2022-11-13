import styled from 'styled-components';

const getSocialIconByName = (name) =>
  name === 'Google' ? 'images/googleLogo.svg' : name === 'Kakao' ? 'images/kakaoLogo.svg' : 'images/NaverLogo.png';

export const Icon = styled.img.attrs(({ name }) => ({
  src: getSocialIconByName(name),
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
