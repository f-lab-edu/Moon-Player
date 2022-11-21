import { DefaultTheme } from 'styled-components';

const colors = {
  blueMagent: '#6633cc',
  Magenta: '#FA7CD7',
  lightBlue: '#5c79f1',
  white: 'white',
  black: 'black',
  darkgreen: '#1cc802',
  lightyellow: '#ffeb3b',
  purple: 'purple',
  dodgerBlue: '#1797f3',
  gray: 'gray',
};

const fontSize = {
  s: '16px',
  m: '20px',
  l: '24px',
  xl: '30px',
  title: '40px',
};

export type Colors = typeof colors;
export type FontSizes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};
export default theme;
