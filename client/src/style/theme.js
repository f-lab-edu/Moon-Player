const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  small: calcRem(16),
  base: calcRem(20),
  lg: calcRem(24),
  xl: calcRem(28),
  xxl: calcRem(32),
  xxxl: calcRem(36),
  titleSize: calcRem(40),
};

const colors = {
  blueMagent: '#6633cc',
  Magenta: '#FA7CD7',
  lightBlue: '#5c79f1',
  white: 'white',
  black: 'black',
  darkgreen: '#1cc802',
  lightyellow: '#ffeb3b',
  purple: 'purple',
};

const margins = {
  small: calcRem(10),
  base: calcRem(16),
  lg: calcRem(22),
  xl: calcRem(28),
  xxl: calcRem(34),
  xxxl: calcRem(40),
};

const paddings = {
  small: calcRem(10),
  base: calcRem(16),
  lg: calcRem(22),
  xl: calcRem(28),
  xxl: calcRem(34),
  xxxl: calcRem(40),
};
const fontWeights = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};
const deviceSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '450px',
  tablet: '768px',
  tabletL: '1024px',
};
const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};
const images = {
  Logo: 'images/Loginlogo.png',
};
const boxShadows = {
  one: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  two: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  three: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
  card: 'rgb(38, 57, 77) 0px 20px 30px -10px',
  image: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  container: '2px 1px 10px 1px rgba(0, 0, 0, 0.3)',
};

const borderRadius = {
  small: '2px',
  base: '4px',
  md: '5px',
  large: '6px',
  xl: '7px',
};
const border = {
  thin: '1px solid rgba(0, 0, 0, 0.1)',
  extralight: '1px solid rgba(0, 0, 0, 0.2)',
  light: '1px solid rgba(0, 0, 0, 0.3)',
};

export const theme = {
  fontSizes,
  colors,
  device,
  deviceSizes,
  images,
  margins,
  paddings,
  fontWeights,
  boxShadows,
  borderRadius,
  border,
};
export default theme;
