import styled from 'styled-components';

export const ScrollBox = styled.div(
  ({ theme }) => `
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    height: 5%;
    background: ${theme.colors.white};
    border-radius: ${theme.borderRadius.xl};
  }

  // 파이어폭스
  scrollbar-width:thin;
  scrollbar-color:${theme.colors.white};

  

`
);

export default ScrollBox;
