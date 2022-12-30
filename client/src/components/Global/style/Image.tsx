import styled from 'styled-components';
interface ImageProps {
  img: string;
}

const Image = styled.img.attrs(({ img }: ImageProps) => ({
  src: img,
}))<ImageProps>`
  object-fit: fill;
  max-width: 100%;
  width: ${({ width = '100px' }) => width};
  height: ${({ height = '100px' }) => height};
  box-shadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px';
`;

export default Image;
