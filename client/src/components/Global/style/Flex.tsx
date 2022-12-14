import styled from 'styled-components';

// CSS Object랑 매칭 x
interface FlexProps {
  direction: string;
  justifyContent?: string;
  alignItems?: string;
}

export const Flex = styled.div<FlexProps>(
  ({ direction = 'row', justifyContent, alignItems }) => `
  display: flex;
  flex-direction:${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`
);

export default Flex;
