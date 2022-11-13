import styled from 'styled-components';
type FlexProps = {
  direction: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
};

export const Flex = styled.div<FlexProps>(
  ({ direction, justifyContent, alignItems, padding }) => `
  display: flex;
  flex-direction:${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  padding:${padding};
`
);
export default Flex;
