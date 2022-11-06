import styled from 'styled-components';

export const Flex = styled.div(
  ({ direction, justifyContent, alignItems, padding }) => `
  display: flex;
  flex-direction:${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  padding:${padding};

`
);
export default Flex;

Flex.defaultProps = {
  direction: 'flex',
};
