import styled from 'styled-components';

import { StyledProps } from 'types/app';

interface ImageProps extends StyledProps {
  img: string;
}

const Image = styled.img.attrs(({ img }: ImageProps) => ({
  src: img,
}))<ImageProps>`
  object-fit: fill;
  max-width: 100%;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px';
`;
Image.defaultProps = {
  width: '100px',
  height: '100px',
};

export default Image;
