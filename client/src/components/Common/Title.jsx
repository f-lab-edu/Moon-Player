import styled from 'styled-components';

export const Title = styled.h3(
  ({ size, color }) => `
  font-size: ${size};
  color: ${color};  
  text-shadow: 2px 2px 2px gray;
`
);
export default Title;
