import styled from 'styled-components';
type ImageProps = {
  width: string;
  height: string;
  shadow?: string;
  src: string;
};
const Image = styled.img.attrs(({ src }) => ({
  src: src,
}))<ImageProps>`
  object-fit: fill;
  max-width: 100%;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  box-shadow: ${({ shadow }) => shadow};
`;

Image.defaultProps = {
  width: '100px',
  height: '100px',
  shadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
};

export default Image;
