import styled from 'styled-components';

export const Flex = styled.div(
  ({ direction, justifyContent, alignItems }) => `
  display: flex;
  flex-direction:${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};

`
);
export default Flex;

Flex.defaultProps = {
  direction: 'flex',
};
