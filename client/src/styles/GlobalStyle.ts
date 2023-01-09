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

.swiper-slide img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
.swiper-pagination-bullet {
  color: white;
  margin:2px;
  opacity: 1;
  width:10px;
  height: 10px;
  background-color: white;
  margin-bottom: 10px;
}

.swiper-pagination-bullet-active {
  background-color: black;
  
}


`;
export default GlobalStyle;
