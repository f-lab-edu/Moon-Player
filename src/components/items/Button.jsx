import styled from "styled-components";
const Button = styled.button`
  width: 100%;
  height: 60px;
  font-size: 25px;
  margin: 10px 0px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #6633cc;

  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  > a {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
`;
export default Button;