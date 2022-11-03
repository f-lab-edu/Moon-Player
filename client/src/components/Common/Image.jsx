import styled from 'styled-components';
const Image = styled.img.attrs(({ src }) => ({
  src: src,
}))`
  object-fit: fill;
  width: ${({ width }) => width}; //120
  height: ${({ height }) => height}; //70
  max-width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export default Image;
