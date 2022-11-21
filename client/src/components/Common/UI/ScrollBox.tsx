import styled from 'styled-components';
import { StyledProps } from 'types/app';

interface ScrollBoxProps extends StyledProps {
  radius?: string;
}
export const ScrollBox = styled.div<ScrollBoxProps>(
  ({ color, radius }) => `
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    height: 5%;
    background: ${color};
    border-radius: ${radius};
  }

  // 파이어폭스
  scrollbar-width:thin;
  scrollbar-color:${color};
`
);
ScrollBox.defaultProps = {
  color: 'white',
  radius: '7px',
};

export default ScrollBox;
