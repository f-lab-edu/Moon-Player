import styled from 'styled-components';

export const ScrollBox = styled.div(
  ({ theme }) => `
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    height: 5%;
    background: ${theme.colors.purple};
    border-radius: ${theme.borderRadius.xl};
  }

  // 파이어폭스
  scrollbar-width:thin;
  scrollbar-color:${theme.colors.purple};

  
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`
);

export default ScrollBox;
