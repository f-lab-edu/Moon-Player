import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body,html {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}


*{
  box-sizing: border-box;

}


.pagination{
  width: 10px;
  height: 10px;
  text-align: center;
  margin:10px;

}


.swiper-pagination-bullet{
    background-color:white;
}
`;
export default GlobalStyle;
