import styled from 'styled-components';

export const Avatar = styled.img.attrs(({ src }) => ({
  src: src,
}))`
  /* default 설정 */
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};

  /* 공통 속성 */
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  transform: scale(1.2);
`;

Avatar.defaultProps = {
  height: '100px',
  width: '100px',
};

export default Avatar;