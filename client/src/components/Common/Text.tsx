import styled from 'styled-components';
type TextProps = {
  color: string;
  fontSize: string;
  weight?: string;
  align?: string;
  shadow?: string;
  margin?: string;
};

export const Text = styled.h3<TextProps>(
  ({ color, fontSize, weight, align, shadow, margin }) => `
  color:${color};
  font-size:${fontSize};
  font-weight:${weight};
  text-align:${align};
  text-shadow: ${shadow};
  margin:${margin};
`
);
// Text.defaultProps = {
//   color: 'white',
//   fontSize: '20px',
//   weight: '700',
//   align: 'start',
// };

export default Text;
