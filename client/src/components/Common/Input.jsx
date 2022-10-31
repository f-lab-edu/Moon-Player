import styled from 'styled-components';

const Input = styled.input(({ error }) => `
  width: 500px;
  height: 40px;
  border: 0;
  padding: 10px 0px;
  background: transparent;
  outline-width: 0;
  margin-top: 23px;
  font-size: 18px;
  border-bottom: 1px solid ${error ? 'rgba(255,0,0, 0.3)' : 'rgba(0, 0, 0, 0.1)'};
  color: ${error ? 'red' : 'black'}
`)

export default Input