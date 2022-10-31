import styled from 'styled-components';
const Image = styled.img.attrs(({ img }) => ({
  src: img,
}))`
  object-fit: fill;
  width: 120px;
  max-width: 100%;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export default Image;
