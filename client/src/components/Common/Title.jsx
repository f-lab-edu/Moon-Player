import styled from 'styled-components';

export const Title = styled.h3(
  ({ size, color, shadow }) => `
  font-size: ${size};
  color: ${color};  
  text-shadow: ${shadow};

`
);
Title.defaultProps = {
  shadow: '2px 2px 2px gray',
  color: 'white',
};

export default Title;
