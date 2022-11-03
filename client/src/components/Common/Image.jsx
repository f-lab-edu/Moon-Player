import styled from 'styled-components';
const Image = styled.img.attrs(({ src }) => ({
  src: src,
}))`
  object-fit: fill;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: 100%;
  box-shadow: ${({ theme }) => theme.image};
`;

export default Image;
