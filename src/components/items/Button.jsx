import styled from 'styled-components';
const Button = styled.button`
  width: 100%;
  height: 60px;
  font-size: 25px;
  margin: 10px 0px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #6633cc;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  color:white;

  &:hover{
    cursor: pointer;
    background: pink;
  }
  &:active{
    box-shadow: 1px 1px 0 rgb(0,0,0,0.5);
  }

  &:disabled{
    box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
    cursor: default;
    opacity: 0.5;
    background: #6633cc;
  }

`;
export default Button;