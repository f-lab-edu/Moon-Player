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
export const theme = {
  fontSizes,
  colors,
  device,
  deviceSizes,
  images,
  margins,
  paddings,
  fontWeights,
};
export default theme;
