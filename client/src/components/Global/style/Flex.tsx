import styled from 'styled-components';

// CSS Object랑 매칭 x
interface FlexProps {
  direction: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
}

export const Flex = styled.div<FlexProps>(
  ({ direction = 'row', justifyContent, alignItems, gap }) => `
  display: flex;
  flex-direction:${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  gap:${gap}
`
);

export default Flex;
