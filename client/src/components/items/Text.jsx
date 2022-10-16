import styled from 'styled-components';

const Text = styled.span(({ error }) => `
  visibility:${error ? 'visible' : 'hidden'};
  margin-top:3px;
  color: ${error ? 'red' : 'black'};
  
`)

export default Text