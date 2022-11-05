import styled from 'styled-components';
const Image = styled.img.attrs(({ src }) => ({
  src: src,
}))`
  object-fit: fill;
  max-width: 100%;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  box-shadow: ${({ theme }) => theme.image};
`;

export default Image;
