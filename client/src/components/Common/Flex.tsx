import styled from 'styled-components';
type FlexProps = {
  direction: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  margin?: string;
};

export const Flex = styled.div<FlexProps>(
  ({ direction, justifyContent, alignItems, padding, margin }) => `
  display: flex;
  flex-direction:${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  padding:${padding};
  margin:${margin}
`
);
export default Flex;
